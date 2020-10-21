import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super()

    this.state = {
      filteredArr: '',
      hobbies: ['coding ', 'cooking ', 'working out ', 'stressing out']
    }

  }
  handleChange(filter){
    this.setState({
      filteredArr:filter
    });
  }

  render(){
    let hobbies = this.state.hobbies
      .filter((e) => {
        return e.includes(this.state.filteredArr)
      })
      .map((e)=> {
        return <h2 key={e}>{e}</h2>
      });

      return(
        <div className ='App'>
          <input onChange={e=> this.handleChange(e.target.value)}/>
          <p>{hobbies}</p>
        </div>
      );
    }
}

export default App;
