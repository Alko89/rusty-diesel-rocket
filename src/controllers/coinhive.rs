extern crate rocket;
extern crate rocket_contrib;
extern crate serde_json;
extern crate reqwest;
extern crate serialize;

use rocket_contrib::Json;
use std::io::Read;
use serialize::json;
// use std::collections::HashMap;

#[derive(Serialize)]
struct Balance {
    success: bool,
    name: String,
    total: i32,
    withdrawn: i32,
	balance: i32,
	error: String
}

// #[derive(Serialize)]
// struct Error {
//     error: String
// }

fn empty_balance() -> Balance {
    Balance {
        success: false,
        name: "".to_string(),
        total: 0,
        withdrawn: 0,
        balance: 0,
        error: "".to_string()
    }
}

#[get("/test")]
fn test() -> Json<Balance> {
    let req = reqwest::get("https://api.coinhive.com/user/balance?secret=E9NjguaYDdrhkm8XSfPmTV6OmgnBBYr5&name=Anonymous");

    match req {
        Ok(mut res) => {
            let mut body = String::new();
            res.read_to_string(&mut body);
            println!("{:?}", body);

            // can this be done with HashMap?
            //let response: HashMap<String, String> = json::decode(&body).unwrap();
            //println!("{:?}", response);

            if let Ok(request_json) = json::from_str(&body) {
                if let Some(ref name) = request_json.find("balance") {
                    Json(Balance {
                        success: true,
                        name: name.to_string(),
                        total: 1,
                        withdrawn: 2,
                        balance: 3,
                        error: "".to_string()
                    })
                }
                else{
                    Json(empty_balance())
                }
            }
            else{
                Json(empty_balance())
            }
        },
        Err(_) => Json(empty_balance())
    }
}
