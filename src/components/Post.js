import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Post extends Component {
  constructor(props) {
    super(props)
  }

  handleDelete(e, id) {
    e.preventDefault()
    console.log(id)
    this.updateStatustoApi(id)
  }

  updateStatustoApi(id) {
    fetch('/api/posts', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        id: id,
        isDeleted: true
      }
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    const time = new Date(this.props.createTime)
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }
    return (
      <div className="entry">
        <p>{time.toLocaleString('en-US', options)}</p>
        <p>Feeling: {this.props.feeling}</p>
        <p>{this.props.post}</p>
        <span>
          <button
          onClick={(e) => this.handleDelete(e, this.props.id)}
          type="button">
          Delete
          </button>
        </span>
      </div>
    )
  }
}

Post.propTypes = {
  createTime: PropTypes.string,
  feeling: PropTypes.string,
  post: PropTypes.string
}

export default Post;
