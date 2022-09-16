import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import AuthenticationReducer from "./modules/authentication/Authentication.reducer";
import {BrowserRouter} from "react-router-dom";
import ComicsReducer from "./modules/comicsDemonstration/Comics.reducer";

let reducers = combineReducers({
    authentication: AuthenticationReducer,
    comic: ComicsReducer,
});

const composeEnhancers = composeWithDevTools({});

export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
