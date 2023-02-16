import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Error from './Error';
import Pokemon from './Pokemon';
import DynamicTable from './DynamicTable';
import Contact from './Contact';

function App() {
  return (
        <>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path="/pokemon" component={Pokemon} />
          <Route exact path="/table" component={DynamicTable} />
          <Route exact path="/count" component={Contact} />
          <Route component={Error} />
        </Switch>
        </>
  );
}

export default App;
