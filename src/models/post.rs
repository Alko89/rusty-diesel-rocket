use diesel;
use diesel::prelude::*;
use diesel::pg::PgConnection;

use ::schema::posts;

#[table_name = "posts"]
#[derive(Serialize, Queryable, Insertable, FromForm, Debug, Clone)]
pub struct Post {
    pub id: i32,
    pub title: String,
    pub body: String,
    pub published: bool,
}


impl Post {
    pub fn all(conn: &PgConnection) -> Vec<Post> {
        posts::table.order(posts::id.desc()).load::<Post>(conn).unwrap()
    }
    
    pub fn get_titles(conn: &PgConnection) -> Vec<String> {
        posts::table.select(posts::title).load(conn).unwrap()
    }
    
    pub fn post(id: i32, conn: &PgConnection) -> Vec<Post> {
        posts::table.find(id).load::<Post>(conn).unwrap()
    }

    pub fn insert(&self, conn: &PgConnection) -> bool {
        diesel::insert(self).into(posts::table).execute(conn).is_ok()
    }

    pub fn update(id: i32, body: String, conn: &PgConnection) -> bool {
        diesel::update(posts::table.filter(posts::id.eq(id)))
            .set(posts::body.eq(body))
            .execute(conn).is_ok()
    }

    pub fn toggle_with_id(id: i32, conn: &PgConnection) -> bool {
        let post = posts::table.find(id).get_result::<Post>(conn);
        if post.is_err() {
            return false;
        }

        let new_status = !post.unwrap().published;
        let updated_post = diesel::update(posts::table.find(id));
        updated_post.set(posts::published.eq(new_status)).execute(conn).is_ok()
    }

    pub fn delete_with_id(id: i32, conn: &PgConnection) -> bool {
        diesel::delete(posts::table.find(id)).execute(conn).is_ok()
    }
}
