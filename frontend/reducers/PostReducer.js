export default function reducer(state={
    post: {
      id: null,
      title: null,
      body: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_POST": {
        return {...state, fetching: true}
      }
      case "FETCH_POST_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_POST_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          post: action.payload,
        }
      }
      // case "ADD_POST": {
      //   return {
      //     ...state,
      //     tweets: [...state.tweets, action.payload],
      //   }
      // }
      // case "UPDATE_POST": {
      //   const { id, text } = action.payload
      //   const newTweets = [...state.tweets]
      //   const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
      //   newTweets[tweetToUpdate] = action.payload;

      //   return {
      //     ...state,
      //     tweets: newTweets,
      //   }
      // }
      // case "DELETE_POST": {
      //   return {
      //     ...state,
      //     tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
      //   }
      // }
    }

    return state
}
