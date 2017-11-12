extern crate rocket;
extern crate rocket_contrib;
extern crate tera;
extern crate markdown;

// use rocket::request::{FlashMessage};
use rocket_contrib::Template;
use tera::Context;

use std::fs::File;
use std::io::prelude::*;

#[get("/", rank=2)]
fn index() -> Template {
    let mut context = Context::new();

    let mut f = File::open("static/md/index.md").expect("file not found");

    let mut c = String::new();
    f.read_to_string(&mut c)
        .expect("something went wrong reading the file");
    let html : String = markdown::to_html(&c);
    
    context.add("md", &html);

    Template::render("markdown", &context)
}
