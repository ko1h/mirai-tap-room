import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import SakeList from './SakeList'
import Contact from './Contact'
import AddList from './AddList'
import Edit from './Edit'
import NewTicketControl from './NewTicketControl'
import { Switch, Route } from 'react-router-dom'
import Error404 from './Error404'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterSakeList: []
    }
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this)
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterSakeList = this.state.masterSakeList.slice()
    newMasterSakeList.push(newTicket)
    this.setState({masterSakeList: newMasterSakeList})
  }

  render(){
    return (
      <div>
        <style global jsx>{`
        body {
            margin: 0;
            padding: 0;
            background-color: lightgray;
            }
      `}</style>
        <Header/>
        <Footer/>
        <Switch >
          <Route exact path='/' component={Welcome} />
          <Route path='/sakeList' render={()=><SakeList sakeList={this.state.masterSakeList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewSakeCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/contact' component={Contact} />
          <Route path='/addList' component={AddList} />
          <Route path='/edit' component={Edit} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }

}
export default App
