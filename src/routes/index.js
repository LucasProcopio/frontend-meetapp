import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Details from '~/pages/Details';
import New from '~/pages/New';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/details" isPrivate component={Details} />
      <Route path="/meetup/new" isPrivate component={New} />
    </Switch>
  );
}
