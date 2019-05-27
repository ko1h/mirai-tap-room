import React from 'react'
import NewSakeForm from './NewSakeForm'
import AuthConfirmation from './AuthConfirmation'
import PropTypes from 'prop-types'
import Header from './Header'

class NewSakeControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
    }
    this.handleAuthConfirmation = this.handleAuthConfirmation.bind(this)
  }

  handleAuthConfirmation() {
    this.setState({formVisibleOnPage: true})
  }

  render(){
    let currentVisibleContent = null
    if (this.state.formVisibleOnPage){
      currentVisibleContent = <NewSakeForm onNewSakeCreation={this.props.onNewSakeCreation}/>
    }
    else {
      currentVisibleContent = <AuthConfirmation onAuthConfirmation={this.handleAuthConfirmation}/>
    }
    return(
      <div>
        <Header />
        {currentVisibleContent}
      </div>
    )
  }
}

NewSakeControl.propTypes = {
  onNewSakeCreation: PropTypes.func
}

export default NewSakeControl
