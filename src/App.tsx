import React from 'react';
import {Authentication} from "./modules/authentication/Authentication";
import {Route, Router} from "react-router";
import {createBrowserHistory} from "history";
import {Comics} from "./modules/comicsDemonstration/Comics";
import {IState} from "./commonTypes";
import {useSelector} from "react-redux";

const customHistory = createBrowserHistory();

function App() {

    const isAuthorised = useSelector((state: IState) => state.authentication.isAuthorised);

    return (
        <Router history={customHistory}>
            <Route path='/' render={() => (
                isAuthorised
                    ? (<Comics/>)
                    : (<Authentication/>)
            )}/>
        </Router>
    );
}

export default App;
