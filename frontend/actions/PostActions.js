import dispatcher from '../dispatcher';
import axios from 'axios';

export function addPost(title, body) {
    dispatcher.dispatch({
        type: "ADD_POST",
        title,
        body
    });
}

export function updatePost(id, title, body) {
    dispatcher.dispatch({
        type: "UPDATE_POST",
        id,
        title,
        body
    });
}

export function deletePost(id) {
    dispatcher.dispatch({
        type: "DELETE_POST",
        id
    });
}

export function getPosts() {
    dispatcher.dispatch({type: "FETCH_POSTS"});

    axios("/post/react").then((data) => {
        console.log("Data recieved", data);
        dispatcher.dispatch({type: "RECEIVE_POSTS", posts: [
            {
                id: Date.now(),
                title: data.data.title,
                body: data.data.body
            },
        ]});
    });
}
