import React from 'react'
import Header from './Header'
import Welcome from './Welcome'
import SakeList from './SakeList'
import NewSakeControl from './NewSakeControl'
import Error404 from './Error404'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterTicketList: []
    }
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this)
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice()
    newMasterTicketList.push(newTicket)
    this.setState({masterTicketList: newMasterTicketList})
  }

  render(){
    return (
      <div>
        <style global jsx>{`
            body {
              margin: 0;
              padding: 0;
            }
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/sakeList' render={()=><SakeList sakeList={this.state.masterTicketList} />} />
          <Route path='/newSake' render={()=><NewSakeControl onNewSakeCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    )
  }

}

export default App
