import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FeelingDropdown from './Dropdown'

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
    const post = document.getElementById('textInput').value.trim()
    const feeling = e.target.firstChild.firstChild.textContent
    if (post.length === 0) {
      e.preventDefault()
      console.log("Input cannot be empty.")
    } else if (feeling.length > 10) {
      e.preventDefault()
      console.log("Tell me your feeling today.")
    } else {
      const Post = {
        post: post,
        feeling: feeling,
        createTime: (new Date()).getTime()
      }
      this.createNewPostToApi(Post)
    }
  }

  createNewPostToApi(data) {
    //alert(JSON.stringify(data))
    fetch('/api/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    return (
      <div>
        <textarea id="textInput" rows="4" cols="50" onChange={this.handleInput} placeholder={this.props.initText}></textarea>
        <form id="newPost" onSubmit={this.handleSubmit}>
          <FeelingDropdown id="dropdown" />
          <button type="submit" id="newBtn" form="newPost" >Send</button>
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
