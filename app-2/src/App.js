import React, {Component} from 'react';
import './logo.svg';
import './App.css';

class App extends Component{
    constructor(){
      super();

      this.state = {
        hobbies: ['cooking', 'working out', 'coding']
      };
    }

    render(){
        let hobbies=this.state.hobbies.map((e) => {
         return <li key={e}>{e}</li> 
        });

        return <div className="App">{hobbies}</div>
    
    }


}
export default App;