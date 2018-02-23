import React, { Component } from 'react'
import Post from './Post'

class Table extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  getAllPostsFromApi () {
    fetch('/api/posts')
      .then(res => res.json())
      .then(result => this.setData(result))
      .catch((error) => {
        console.error(error)
      })
  }

  setData (result) {
    this.setState({
      posts: result
    })
  }

  componentDidMount () {
    console.log('API GET request here')
    this.getAllPostsFromApi()
  }

  render () {
    return (
      <div>
        {this.state.posts.map(post => (
          post.isDeleted ? null : (
           <Post
             key={post.id}
             id={post.id}
             post={post.post}
             feeling={post.feeling}
             createTime={post.createTime} />
          )
         )
         )}
      </div>
    )
  }
}

export default Table
