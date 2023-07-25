import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { Provider } from "react-redux";

import 'antd/dist/antd.css';
import store from "./app/store";

//Need to pass<App/> component as a first paramter and root to hook apps into root div
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/> 

        </Provider>   
    </Router>,
    document.getElementById('root')
);