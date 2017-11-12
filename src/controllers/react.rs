extern crate rocket;

use std::io;

use rocket::response::NamedFile;


#[get("/")]
fn index() -> io::Result<NamedFile> {
    NamedFile::open("static/index.html")
}
