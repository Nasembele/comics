import React from 'react';
import {Authentication} from "./modules/authentication/Authentication";
import {Redirect, Route, Router, Switch} from "react-router";
import { createBrowserHistory } from "history";
import {Comics} from "./modules/comicsDemonstration/Comics";
import {IState} from "./commonTypes";
import {useSelector} from "react-redux";

const customHistory = createBrowserHistory();

function App() {

    const isAuthorised = useSelector((state: IState) => state.authentication.isAuthorised);

    return (
      <Router history={customHistory}>
          <Switch>
              <Route path='/' exact render={() => (
                  isAuthorised
                      ? (<Redirect to={'/comics'}/>)
                      : (<Authentication/>)
              )}/>
              <Route path='/comics' component={Comics}/>
          </Switch>
      </Router>
  );
}

export default App;
