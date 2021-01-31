import {applyMiddleware, combineReducers, createStore} from "redux";
import sideBarReducer from "./sideBarReducer";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";
import authReducer from "./auth_reducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
  profileReducer: profileReducer,
  messageReducer: messageReducer,
  sideBarReducer: sideBarReducer,
  userReducer: userReducer,
  authReducer: authReducer
})


let store = createStore(reducers, applyMiddleware(thunk));


export default store;