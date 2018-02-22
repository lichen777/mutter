import React, { Component } from 'react'
import Post from './Post'

class Table extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  getAllPostsFromApi() {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        return data
      })
      .catch((error) => {
        console.error(error);
      })

      //example
    return [
      {
        post: "post",
        feeling: "good",
        createTime: "2018-02-22T16:45:32.559Z",
        id: 1
      },
      {
        post: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        feeling: "happy",
        createTime: "2018-02-22T16:45:32.559Z",
        id: 2
      }
    ]
  }

  componentDidMount() {
    console.log("API GET request here")
    const data =  this.getAllPostsFromApi()
    this.setState({
      posts: data
    })
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            post={post.post}
            feeling={post.feeling}
            createTime={post.createTime}
          />
          )
        )}
      </div>
    )
  }
}

export default Table;
