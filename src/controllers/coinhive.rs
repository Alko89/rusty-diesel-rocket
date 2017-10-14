extern crate rocket;
extern crate rocket_contrib;
extern crate serde_json;
extern crate reqwest;

use rocket_contrib::Json;
use serde_json::Value;

use std::io::Read;


#[get("/user/balance/<name>")]
fn user_balance(name: String) -> Json<Value> {
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

#[get("/stats/payout")]
fn stats_payout() -> Json<Value> {
    let req = reqwest::get(&format!("https://api.coinhive.com/stats/payout?secret=OMITED"));

    match req {
        Ok(mut res) => {
            let mut body = String::new();
            res.read_to_string(&mut body);

            Json(serde_json::from_str(&body).unwrap())
        },
        Err(_) => Json(serde_json::from_str("error:error").unwrap())
    }
}
