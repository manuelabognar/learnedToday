import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import UserData from './pages/UserData';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/userdata" component={UserData} />
      </Switch>
    </BrowserRouter>
  );
}

