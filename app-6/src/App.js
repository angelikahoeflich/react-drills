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

  handleInputChange(value){
    this.setState({
      input: value
    })
  }

  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }
  
  render(){
    let list = this.state.list.map(el => {
      return <Todo key={index} task={el}/>
    });

  return (
    <div className="App">
      <h1>My To Do List!</h1>
      <div>
    <input
      value={this.state.input} 
      placeholder="type new task"
      onChange={e => this.addTask(e.target.value)}/>

    <button onClick={this.handleAddTask}>Add stuff here</button>

    
      </div>
      {list}
    </div>
  );
}
}

export default App;
