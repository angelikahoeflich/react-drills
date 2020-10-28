import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component() {
  constructor(){
    super()

    this.state = {
      list: [],
      input: ''
    };


  }
  
  render(){

    let list = this.state.list.map(el => {
      return <Todo/>
    })



  return (
    <div className="App">
      <h1>My To Do List</h1>
      <div>
    <input placeholder="type new task" type="text"/>

    <button onClick={}>Add stuff here</button>


      </div>
    </div>
  );
}
}

export default App;
