import React, { Component } from 'react';
import './App.css';
import Text from './components/Text'

class App extends Component {
  render() {
    return (
      <div id="inputArea">
        <Text initText={"What's on your mind?"}/>
      </div>
    )
  }
}

export default App;
