import { combineReducers } from "redux"

import post from "./PostReducer"
import user from "./UserReducer"

export default combineReducers({
  post,
  user,
})
