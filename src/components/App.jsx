import React from 'react'
import Header from './Header'
import Welcome from './Welcome'
import SakeList from './SakeList'
import Admin from './Admin'
import Error404 from './Error404'
import { Redirect } from 'react-router-dom';
import NewSakeControl from './NewSakeControl'
import { Switch, Route } from 'react-router-dom'
import { v4 } from 'uuid'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterSakeList: {
        '1' : {
          name: 'name area',
          brand: 'mike',
          details: 'details about the person  1500s',
          id: '1',
          abv: '6.8%',
          price: '7',
          remaining: 20
        },
        '2' : {
          name: 'name area',
          brand: 'kohichi',
          details: 'details about the person  1500s',
          id: '2',
          abv: '6.8%',
          price: '7',
          remaining: 20
        }
      },
      sakeId: null
    },

    this.handleAddingItem = this.handleAddingItem.bind(this)
    this.handleEditItem = this.handleEditItem.bind(this)

    this.handleRemoveItem = this.handleRemoveItem.bind(this)

    this.handleSellGlass  = this.handleSellGlass.bind(this)

    this.handleSellBottle = this.handleSellBottle.bind(this)


  }

  handleAddingItem(newSake) {
    let newSakeId = v4()
    newSake.id = newSakeId
    let newMasterSakeList = Object.assign(
      {}, this.state.masterSakeList,
      {[newSakeId]: newSake})
    this.setState({masterSakeList: newMasterSakeList})
  }

  handleEditItem(sakeId){
    this.setState({sakeId: sakeId})
  }

  handleSellGlass(sakeId){
    let newMasterSakeList = this.state.masterSakeList
    let sakeToSell = newMasterSakeList[sakeId]
    if(sakeToSell.remaining > 0){
      sakeToSell.remaining --
    }
    this.setState({masterSakeList: newMasterSakeList})
  }

  handleSellBottle(sakeId){
    let newMasterSakeList = this.state.masterSakeList
    let sakeToSell = newMasterSakeList[sakeId]
    if (sakeToSell.remaining >= 6){
      sakeToSell.remaining -=6
    }
    this.setState({masterSakeList: newMasterSakeList})
  }

  handleRemoveItem (sakeId) {
    this.setState({sakeId: null})
  }

  render() {
    return (
      <div>
        <style global jsx>{`
            body {
              margin: 0;
              padding: 0;
            }
        `}</style>
        <Header />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/sakelist' render={() =><SakeList sakeList={this.state.masterSakeList} />} />
          <Route exact path='/newSake' render={()=><NewSakeControl onNewSakeCreation={this.handleAddingItem} />} />
          <Route path='/admin'
            render={(props)=><Admin
              onNewSakeCreation={this.handleAddingItem}
              sakeList={this.state.masterSakeList}
              currentRouterPath={props.location.pathname}
              onChangeSelectedSake={this.handleEditItem}
              selectedSake={this.state.sakeId}
              onSellGlass={this.handleSellGlass}
              onSellBottle={this.handleSellBottle}
              onCloseItem={this.handleRemoveItem}
            />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }

}

export default App
