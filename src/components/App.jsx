import React from 'react';
import Header from './Header';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={TicketList} />
      </Switch>
    </div>
  );
}
export default App;
