import React, {Component} from 'react';
import './App.css';
import List from './List';
import NewTask from './NewTask';

class App extends Component{
  constructor(){
    super()

    this.state={
      list: []
    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(listItem){
    this.setState({
      list:[...this.state.list, listItem]
    })
  }


  render(){
    return(

        <div>
            <h1>My to-do list:</h1>
            <NewTask add={this.handleAdd}/>
            <List lists={this.state.list}/>
        </div>
    )
  }
}

export default App


