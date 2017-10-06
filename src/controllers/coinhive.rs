extern crate rocket;
extern crate rocket_contrib;
extern crate serde_json;
extern crate reqwest;

use rocket_contrib::Json;


#[derive(Serialize, Deserialize)]
struct Balance {
    success: bool,
    name: String,
    total: i32,
    withdrawn: i32,
	balance: i32,
	error: String
}

#[get("/test")]
fn test() -> Json<Balance> {
    let mut req = reqwest::get("https://api.coinhive.com/user/balance");

    match req {
        Ok(res) => println!("\n\nStatus: {}\n\n", res.status()),
        Err(_) => println!("\n\nError!\n\n")
    }



//    println!("Status: {}", res.status());
//    println!("Headers:\n{}", res.headers());

    Json(Balance {
        success: true,
        name: "Aleš".to_string(),
        total: 1,
        withdrawn: 2,
        balance: 3,
        error: "".to_string()
    })
}
