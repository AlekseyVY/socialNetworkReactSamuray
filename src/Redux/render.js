import React from 'react'
import ReactDOM from "react-dom";
import App from "../App";
import state, {addPost} from "./state";



export const rerenderDOM = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')

    );
}
