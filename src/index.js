import React from 'react'
import ReactDOM from "react-dom";
import App from "./App";
import state, {addPost, updatePostText, addDialog, updateDialogText, subscribe} from "./Redux/state";


export const rerenderDOM = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updatePostText={updatePostText}
                 addDialog={addDialog}
                 updateDialogText={updateDialogText}
            />
        </React.StrictMode>,
        document.getElementById('root')

    );
}

rerenderDOM()
subscribe(rerenderDOM)