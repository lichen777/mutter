import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from './fetch'

class Text extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    e.preventDefault()
    if (this.state.input.length > 140) {
      let prevInput = this.state.input
      console.log("Your input hits the 140 characters limit.")
      e.target.value = prevInput
    } else {
      this.setState({
        input: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.input)
    fetch.createNewPostToApi({Post: this.state.input})
  }

  render() {
    return (
      <div>
        <textarea rows="4" cols="50" form="newPost" onChange={this.handleInput} placeholder={this.props.initText}></textarea>
        <form id="newPost">
          <button type="submit" id="newBtn" onClick={this.handleSubmit}>Send</button>
        </form>
      </div>
    )
  }
}

Text.propTypes = {
  initText: PropTypes.string
}

Text.defaultProps = {
  initText: 'Enter something..'
}

export default Text;
