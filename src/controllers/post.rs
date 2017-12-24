extern crate rocket;
extern crate rocket_contrib;
extern crate tera;
extern crate serde_json;

use rocket::request::{Form, FlashMessage};
use rocket::response::{Flash, Redirect};
use rocket_contrib::{Template, Json};
use tera::Context;
use serde_json::Value;

use ::db;
use ::models::post::Post;
use ::models::user::User;


/*** REACT EXPERIMENT ***/
#[get("/react")]
fn react_index(conn: db::Conn) -> Json<Post> {
    Json(Post::post(0, &conn).pop().unwrap())
}

#[derive(Serialize)]
struct UserJson {
    id: i32,
    name: String
}

#[get("/user")]
fn user(user: User) -> Json<UserJson> {
    let user_json = UserJson {
        id: user.id,
        name: user.username
    };

    Json(user_json)
}

#[get("/user", rank = 2)]
fn anon_user() -> Json<Value> {
    let user_json = r#"{
        "id": null,
        "name": "Anonymous"
    }"#;

    Json(serde_json::from_str(user_json).unwrap())
}
/*** END REACT EXPERIMENT ***/

#[get("/")]
fn index(_user: User, msg: Option<FlashMessage>, conn: db::Conn) -> Template {
    show_post(0, msg, conn, true)
}

#[get("/", rank = 2)]
fn guest_index(msg: Option<FlashMessage>, conn: db::Conn) -> Template {
    show_post(0, msg, conn, false)
}

#[get("/<id>")]
fn view_post(_user: User, id: i32, msg: Option<FlashMessage>, conn: db::Conn) -> Template {
    show_post(id, msg, conn, true)
}

#[get("/<id>", rank = 2)]
fn guest_post(id: i32, msg: Option<FlashMessage>, conn: db::Conn) -> Template {
    show_post(id, msg, conn, false)
}

fn show_post(id: i32, msg: Option<FlashMessage>, conn: db::Conn, logged_in: bool) -> Template {
    let mut target = Context::new();
    match msg {
        Some(ref msg) => target.add("msg", &Some((msg.name(), msg.msg()))),
        None => {}
    };

    target.add("titles", &Post::get_titles(&conn));
    target.add("posts", &Post::post(id, &conn));
    target.add("logged_in", &logged_in);

    Template::render("view_post", target)
}

#[get("/add")]
fn add_post(_user: User, msg: Option<FlashMessage>, conn: db::Conn) -> Template {
    let mut target = Context::new();
    match msg {
        Some(ref msg) => target.add("msg", &Some((msg.name(), msg.msg()))),
        None => {}
    };

    target.add("titles", &Post::get_titles(&conn));

    Template::render("add_post", target)
}

#[post("/new", data = "<post_form>")]
fn new_post(_user: User, post_form: Form<Post>, conn: db::Conn) -> Flash<Redirect> {
    let post = post_form.into_inner();
    if post.title.is_empty()
    {
        Flash::error(Redirect::to("/post/add"), "Title cannot be empty.")
    }
    else if post.body.is_empty()
    {
        Flash::error(Redirect::to("/post/add"), "Body cannot be empty.")
    } 
    else if post.insert(&conn)
    {
        Flash::success(Redirect::to("/post/1"), "Post successfully added.")
    } 
    else
    {
        Flash::error(Redirect::to("/post/add"), "Whoops! The server failed.")
    }
}

#[get("/edit/<id>")]
fn edit_post(_user: User, id: i32, msg: Option<FlashMessage>, conn: db::Conn) -> Template {
    let mut target = Context::new();
    match msg {
        Some(ref msg) => target.add("msg", &Some((msg.name(), msg.msg()))),
        None => {}
    };

    target.add("titles", &Post::get_titles(&conn));
    target.add("posts", &Post::post(id, &conn));

    Template::render("edit_post", target)
}

#[post("/update", data = "<post_form>")]
fn update_post(_user: User, post_form: Form<Post>, conn: db::Conn) -> Flash<Redirect> {
    let post = post_form.into_inner();
    if post.title.is_empty()
    {
        Flash::error(Redirect::to("/post/new"), "Title cannot be empty.")
    }
    else if post.body.is_empty()
    {
        Flash::error(Redirect::to("/post/new"), "Body cannot be empty.")
    } 
    else if Post::update(post.id, post.body, &conn)
    {
        Flash::success(Redirect::to(format!("/post/{}", post.id)), "Post successfully updated.")
    } 
    else
    {
        Flash::error(Redirect::to("/post/new"), "Whoops! The server failed.")
    }
}

// #[get("/", rank=2)]
// fn anonymous(flash: Option<FlashMessage>) -> Template {
//     let mut context = HashMap::new();  
//     //TODO: test if this works
//     if let Some(ref msg) = flash {
//         context.insert("msg", msg.msg());
//     }

//     Template::render("anonymous", &context)
// }
