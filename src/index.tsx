import React from 'react';
import './index.css';
import App from './components/app/app';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from "react-dom";
import {setupStore} from "./services/setupStore";



const store = setupStore()


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
