import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import pages from './pages';

class Pages extends Component {
  render() {
    return (
      <Switch>
        { pages.map(item => <Route {...item} />) }
      </Switch>
    );
  }
}

export default Pages;
