import {applyMiddleware, combineReducers, createStore} from "redux";
import sideBarReducer from "./sideBarReducer";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";
import authReducer from "./auth_reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app_reducer";


let reducers = combineReducers({
  profileReducer: profileReducer,
  messageReducer: messageReducer,
  sideBarReducer: sideBarReducer,
  userReducer: userReducer,
  authReducer: authReducer,
  form: formReducer,
  appReducer: appReducer
})


let store = createStore(reducers, applyMiddleware(thunk));


export default store;