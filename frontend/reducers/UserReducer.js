export default function reducer(state={
    user: {
      name: null,
      total: null,
      withdrawn: null,
      balance: null,
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
      globalDifficulty: null,
      blockReward: null,
      xmrToUsd: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        }
      }
    }

    return state
}
