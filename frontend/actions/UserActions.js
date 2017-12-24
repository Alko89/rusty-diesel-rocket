import axios from "axios";

export function fetchUser() {
    return function(dispatch) {
    dispatch({type: "FETCH_USER"});
        axios.get("/react/user")
        .then((response) => {
            dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_USER_REJECTED", payload: err})
        })
    }
}
