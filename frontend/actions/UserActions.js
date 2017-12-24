import axios from "axios";

export function fetchUser() {
    return function(dispatch) {
    dispatch({type: "FETCH_USER"});
        axios.get("/api/user")
        .then((response) => {
            var payload = {
                name: response.data.user,
                total: response.data.payout.total,
                withdrawn: response.data.payout.withdrawn,
                balance: response.data.payout.balance,
                /*
                success": true|false,
                "globalDifficulty": number,
                "globalHashrate": number,
                "blockReward": number,
                "payoutPercentage": number,
                "payoutPer1MHashes": number,
                "xmrToUsd": number,
                "updated": number,
                "error": string
                
                */
                globalDifficulty: response.data.balance.globalDifficulty,
                blockReward: response.data.balance.blockReward,
                xmrToUsd: response.data.balance.xmrToUsd,
            }

            dispatch({type: "FETCH_USER_FULFILLED", payload: payload})
        })
        .catch((err) => {
            dispatch({type: "FETCH_USER_REJECTED", payload: err})
        })
    }
}
