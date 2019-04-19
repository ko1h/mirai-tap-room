import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import Beer from './Beer';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/beer' component={Beer} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}
export default App;
