import React, {Component} from 'react';
import './App.css';
import Todo from './Todo';


class App extends Component() {
  constructor(){
    super()

    this.state = {
      list: [],
      input: ''
    };

      this.addTask = this.addTask.bind(this);
  }
  
  render(){
    let list = this.state.list.map(el => {
      return <Todo key={index}tas={element}/>
    });

  return (
    <div className="App">
      <h1>My To Do List!</h1>
      <div>
    <input
    value={this.state.input} placeholder="type new task"
    onChange={e => this.addTask(e.target.value)}/>

    <button onClick={this.addTask}>Add stuff here</button>

    {list}
      </div>
    </div>
  );
}
}

export default App;
