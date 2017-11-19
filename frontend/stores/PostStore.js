import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class PostStore extends EventEmitter {
    constructor() {
        super();
        this.posts = [
            {
                id: 213,
                title: "test",
                body: "some post from a store"
            },
            {
                id: 32,
                title: "other test",
                body: "some other post"
            }
        ]
    }

    addPost(title, body) {
        const id = Date.now();

        this.posts.push({
            id,
            title,
            body
        })

        this.emit("change");
    }

    getAll() {
        return this.posts;
    }

    recievePost(posts) {
        console.log("Posts: ", posts);

        this.posts = posts;

        this.emit("change");
    }

    handleActions(action) {
        switch (action.type) {
            case "ADD_POST": {
                this.addPost(action.title, action.body);
            }
            case "RECEIVE_POSTS": {
                this.recievePost(action.posts);
            }
        }
    }
}

const postStore = new PostStore;
dispatcher.register(postStore.handleActions.bind(postStore));

export default postStore;
