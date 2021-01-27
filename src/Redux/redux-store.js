import {combineReducers, createStore} from "redux";
import sideBarReducer from "./sideBarReducer";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";




let reducers = combineReducers({
    profileReducer: profileReducer,
    messageReducer: messageReducer,
    sideBarReducer: sideBarReducer
})




let store = createStore(reducers);




export default store;