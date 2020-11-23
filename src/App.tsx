import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Movie from './pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/movie' exact component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
