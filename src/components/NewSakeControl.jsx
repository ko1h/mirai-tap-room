import React from 'react'
import NewSakeForm from './NewSakeForm'
import ConfirmationQuestions from './ConfirmationQuestions'
import PropTypes from 'prop-types'

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false
    }
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this)
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true})
  }

  render(){
    let currentlyVisibleContent = null
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewSakeForm onNewSakeCreation={this.props.onNewSakeCreation}/>
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    )
  }
}

NewTicketControl.propTypes = {
  onNewSakeCreation: PropTypes.func
}

export default NewTicketControl
