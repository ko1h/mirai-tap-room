import React from 'react'
import Header from './Header'
import Welcome from './Welcome'
import SakeList from './SakeList'
import EditSakeForm from './EditSakeForm'
import Error404 from './Error404'
import NewSakeForm from './NewSakeForm';
import { Switch, Route } from 'react-router-dom'
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterSakeList: {
        'sake1' : {
          image: 'toji.jpeg',
          name: 'name area',
          brand: 'brand name',
          details: 'details about the person  1500s'
        },
        'sake2' : {
          image: 'toji2.jpeg',
          name: 'name area',
          brand: 'brand name',
          details: 'details about the person  1500s'
        }
      }
    }

    this.handleAddingItem = this.handleAddingItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);

  }

  handleAddingItem(newSake) {
    let newSakeId = v4();
    let newMasterSakeList = Object.assign({}, this.state.masterSakeList, {
      [newSakeId]: newSake
    });
    this.setState({masterSakeList: newMasterSakeList});
  }

  handleEditItem(editSakeId, editSake) {
    let newMasterSakeList = Object.assign({}, this.state.masterSakeList, {
      [editSakeId]: editSake
    });
    this.setState({masterSakeList: newMasterSakeList});
  }

  handleRemoveItem (sakeId) {
    let newMasterSakeList = Object.assign({}, this.state.masterSakeList);
    delete newMasterSakeList[sakeId];
    this.setState({masterSakeList: newMasterSakeList});
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
          <Route exact path='/sakelist' render={() =><SakeList sakeList={this.state.masterSakeList} onDeleteSake={this.handleRemoveItem} />} />
          <Route exact path='/newSake' render={()=><NewSakeForm onNewSakeCreation={this.handleAddingItem} />} />
          <Route exact path='/edit/:sakeId' render={(props)=><EditSakeForm path={props} selectedSakeId={props.match.params.sakeId} sakeList={this.state.masterSakeList} onEditSake={this.handleEditSake} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }

}

export default App
