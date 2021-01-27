import React from 'react'
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";


export const rerenderDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderDOM()
store.subscribe(rerenderDOM)