#![feature(plugin, decl_macro, custom_derive, const_fn)]
#![plugin(rocket_codegen)]
extern crate rocket;
extern crate rocket_contrib;

// extern crate serde_json;
#[macro_use] extern crate diesel_codegen;
#[macro_use] extern crate serde_derive;

mod schema;
mod models;
mod controllers;
mod db;
mod static_files;

#[macro_use]
extern crate diesel;
extern crate dotenv;
extern crate r2d2;
extern crate r2d2_diesel;

use rocket_contrib::Template;

use controllers::user::*;
use controllers::{post as post_controller};

fn main() {
    rocket::ignite()
        .manage(db::establish_connection())
        .mount("/", routes![index, user_index,
            login_page, login_user, logout, login, logged_user,
            register, registered_user, register_page, register_user,
            static_files::all
        ])
        .mount("/post", routes![post_controller::post])
        .mount("/post/", routes![post_controller::add_post, post_controller::new_post, post_controller::view_post, post_controller::edit_post, post_controller::update_post])
        .attach(Template::fairing())
        .launch();
}
