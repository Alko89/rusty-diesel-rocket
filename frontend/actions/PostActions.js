import axios from "axios";

export function fetchPost() {
    return function(dispatch) {
    dispatch({type: "FETCH_POST"});
        axios.get("/post/react")
        .then((response) => {
            dispatch({type: "FETCH_POST_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_POST_REJECTED", payload: err})
        })
    }
}
