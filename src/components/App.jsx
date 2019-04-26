import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import Sake from './Sake'
import Contact from './Contact'
import AddList from './AddList'
import Edit from './Edit'
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'


function App(){
  return (
    <div>
      <style global jsx>{`
        body {
            margin: 0;
            padding: 0;
            }
      `}</style>
      <Header/>
      <Footer/>
      <Switch >
        <Route exact path='/' component={Welcome} />
        <Route path='/sake' component={Sake} />
        <Route path='/newticket' component={NewTicketControl} />
        <Route path='/contact' component={Contact} />
        <Route path='/addList' component={AddList} />
        <Route path='/edit' component={Edit} />
        <Route component={Error404} />
      </Switch>
    </div>
  )
}
export default App
