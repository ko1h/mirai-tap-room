import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import Sake from './Sake';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/sake' component={Sake} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}
export default App;
