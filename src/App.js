import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './Landing/Landing';
import Search from './Search/Search';
import ChapterPage from './ChapterPage/ChapterPage';

const FourOhFour = () => <h1>404</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/search" component={Search} />
          <Route path="/details/:idBook/:idChapter" component={ChapterPage} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
