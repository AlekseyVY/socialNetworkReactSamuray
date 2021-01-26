import React from 'react'
import ReactDOM from "react-dom";
import App from "../App";
import state, {addPost, updatePostText} from "./state";



export const rerenderDOM = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </React.StrictMode>,
        document.getElementById('root')

    );
}
