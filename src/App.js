import React, { Component } from 'react';
import './App.css';
import Text from './components/Text'
import Table from './components/Table'

class App extends Component {
  render() {
    return (
      <div>
        <div id="inputArea" className="row col-sm-12">
          <Text initText={"What's on your mind?"}/>
        </div>
        <div className="row col-sm-12" id="table">
          <Table />
        </div>
      </div>
    )
  }
}

export default App;
