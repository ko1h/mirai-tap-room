import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import Sake from './Sake';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';


function App(){
  const headerStyle = {
    position: 'absolute'
  };
  const switchStyle = {
    postion: 'absolute'
  };
  return (
    <div>

      <div style={headerStyle}>
        <Header/>
      </div>
      <Switch style={switchStyle}>
        <Route exact path='/' component={Welcome} />
        <Route path='/sake' component={Sake} />
        <Route path='/contact' component={Contact} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}
export default App;
