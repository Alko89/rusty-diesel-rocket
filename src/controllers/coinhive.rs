extern crate rocket;
extern crate rocket_contrib;
extern crate serde_json;
extern crate reqwest;

use rocket_contrib::Json;
use serde_json::Value;

use std::io::Read;


#[get("/balance/<name>")]
fn get_balance(name: String) -> Json<Value> {
    let req = reqwest::get(&format!("https://api.coinhive.com/user/balance?secret=OMITED&name={}", name));

    match req {
        Ok(mut res) => {
            let mut body = String::new();
            res.read_to_string(&mut body);

            Json(serde_json::from_str(&body).unwrap())
        },
        Err(_) => Json(serde_json::from_str("error:error").unwrap())
    }
}
