import { combineReducers } from "redux"

import post from "./postReducer"
import user from "./userReducer"

export default combineReducers({
  post,
  user,
})
