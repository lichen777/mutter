const fetch = {
  createNewPostToApi: function(data) {
    return fetch('/api/posts', {
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
  },

  getAllPostsFromApi: function() {

  }
}

export default fetch;
