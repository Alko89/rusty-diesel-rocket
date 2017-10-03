extern crate rocket;
extern crate rocket_contrib;

use rocket::request::{Form, FlashMessage};
use rocket::response::{Flash, Redirect};
use rocket_contrib::{Template};

use ::db;
use ::models::post::Post;
use std::collections::HashMap;


#[derive(Debug, Serialize)]
struct Context<'a, 'b> 
{
    msg: Option<(&'a str, &'b str)>,
    titles: Vec<Post>,
    posts: Vec<Post>
}

impl<'a, 'b> Context<'a, 'b> {
    pub fn one(id: i32, conn: &db::Conn, msg: Option<(&'a str, &'b str)>) -> Context<'a, 'b> {
        Context{
            msg: msg,
            titles: Post::all(conn),
            posts: Post::post(id, conn)
        }
    }
}

// #[get("/")]
// fn post(flash: Option<FlashMessage>, conn: db::Conn) -> Template {
//     let mut context = HashMap::new();
//     
//     //TODO: test if this works
//     if let Some(ref msg) = flash {
//         context.insert("msg", msg.msg());
//     }
// 
//     let post = Post::post(0, &conn);
//     
//     println!("{:?}", post[0].title);
//     let title = post[0].title.to_string();
//     //TODO: kko kopirat tle not?
//     context.insert("posts", &title.to_string());
// 
//     Template::render("view_post", &context)
//         
//         /*
//         let mut context = HashMap::new();
//         if let Some(ref msg) = flash {
//             context.insert("flash", msg.msg());
//         }
// 
//         Template::render("login", &context)
//         
//         */
// }

#[get("/")]
fn post(msg: Option<FlashMessage>, conn: db::Conn) -> Template {
    Template::render("index",
        &match msg {
        Some(ref msg) => Context::one(1, &conn, Some((msg.name(), msg.msg()))),
        None => Context::one(1, &conn, None),
        })
}

#[get("/<id>")]
fn view_post(id: i32  ,msg: Option<FlashMessage>, conn: db::Conn) -> Template {
    Template::render("view_post",
        &match msg {
        Some(ref msg) => Context::one(id, &conn, Some((msg.name(), msg.msg()))),
        None => Context::one(id, &conn, None),
        })
}

#[get("/add")]
fn add_post(msg: Option<FlashMessage>, conn: db::Conn) -> Template {
     Template::render("add_post", &match msg {
        Some(ref msg) => Context::one(1, &conn, Some((msg.name(), msg.msg()))),
        None => Context::one(1, &conn, None),
        })
}

#[post("/new", data = "<post_form>")]
fn new_post(post_form: Form<Post>, conn: db::Conn) -> Flash<Redirect> {
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
fn edit_post(id: i32, msg: Option<FlashMessage>, conn: db::Conn) -> Template {
     Template::render("edit_post", &match msg {
        Some(ref msg) => Context::one(id, &conn, Some((msg.name(), msg.msg()))),
        None => Context::one(id, &conn, None),
        })
}

#[post("/update", data = "<post_form>")]
fn update_post(post_form: Form<Post>, conn: db::Conn) -> Flash<Redirect> {
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

#[get("/anonymous")]
fn anonymous(flash: Option<FlashMessage>) -> Template {
    let mut context = HashMap::new();  
    //TODO: test if this works
    if let Some(ref msg) = flash {
        context.insert("msg", msg.msg());
    }

    Template::render("anonymous", &context)
}
