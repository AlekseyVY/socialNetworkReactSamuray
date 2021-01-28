import {combineReducers, createStore} from "redux";
import sideBarReducer from "./sideBarReducer";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";




let reducers = combineReducers({
    profileReducer: profileReducer,
    messageReducer: messageReducer,
    sideBarReducer: sideBarReducer,
    userReducer: userReducer
})




let store = createStore(reducers);




export default store;