import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import New from '../views/New';
import Games from '../views/Games';
import Edit from '../views/Edit';
import Details from '../views/Details';

export default function Routes({ userId, userName }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home userName={userName} />} />
        <Route exact path="/new" component={() => <New userId={userId} />} />
        <Route
          exact
          path="/games"
          component={() => <Games userId={userId} userName={userName} />}
        />
        <Route
          exact
          path="/edit/:fbKey"
          component={() => <Edit userId={userId} />}
        />
        <Route exact path="/detail/:fbKey" component={Details} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  userId: PropTypes.string,
  userName: PropTypes.string,
};

Routes.defaultProps = { userId: {}, userName: {} };
