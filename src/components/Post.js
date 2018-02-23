import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Post extends Component {

  handleDelete (e, id) {
    console.log(id)
    this.updateStatustoApi(id)
    document.location.reload()
  }

  updateStatustoApi (key) {
    fetch('/api/posts/' + key, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    const time = new Date(this.props.createTime)
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }
    return (
      <div className='entry'>
        <p>
          {time.toLocaleString('en-US', options)}  
          <span><button className='deleteBtn' type='button' onClick={(e) => this.handleDelete(e, this.props.id)}> Delete </button></span>
        </p>
        <p>
          Feeling:
          {this.props.feeling}
        </p>
        <h3>
          {this.props.post}
        </h3>
      </div>
    )
  }
}

Post.propTypes = {
  createTime: PropTypes.string,
  feeling: PropTypes.string,
  post: PropTypes.string,
  isDeleted: PropTypes.bool
}

export default Post
