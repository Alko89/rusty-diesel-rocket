extern crate rocket;
extern crate rocket_contrib;
extern crate serde_json;
extern crate reqwest;

use rocket_contrib::Json;
use serde_json::Value;

use std::io::Read;

use ::models::user::User;


#[get("/user/balance/<name>")]
fn user_balance(name: String) -> Json<Value> {
    let req = reqwest::get(&format!("https://api.coinhive.com/user/balance?secret=OMITED&name={}", name));

    match req {
        Ok(mut res) => {
            let mut body = String::new();
            res.read_to_string(&mut body).expect("Error reading Coinhive JSON response");

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
            res.read_to_string(&mut body).expect("Error reading Coinhive JSON response");

            Json(serde_json::from_str(&body).unwrap())
        },
        Err(_) => Json(serde_json::from_str("error:error").unwrap())
    }
}

#[get("/user")]
fn user_stats(user: User) -> Json<Value> {
    show_stats(&user.username)
}

#[get("/user", rank = 2)]
fn anon_stats() -> Json<Value> {
    show_stats("Anonymous")
}

fn show_stats(username: &str) -> Json<Value> {
    let req1 = reqwest::get(&format!("https://api.coinhive.com/stats/payout?secret=OMITED"));
    let req2 = reqwest::get(&format!("https://api.coinhive.com/user/balance?secret=OMITED&name={}", username));
    match req1 {
        Ok(mut res1) => {
            match req2 {
                Ok(mut res2) => {
                    let mut body1 = String::new();
                    res1.read_to_string(&mut body1).expect("Error reading Coinhive JSON response");

                    let mut body2 = String::new();
                    res2.read_to_string(&mut body2).expect("Error reading Coinhive JSON response");
                    Json(serde_json::from_str(&format!("{{\"user\": \"{}\", \"balance\": {}, \"payout\": {} }}", username, &body1, &body2)).unwrap())
                },
                Err(_) => Json(serde_json::from_str("error:error").unwrap())
            }
        },
        Err(_) => Json(serde_json::from_str("error:error").unwrap())
    }
}
