import React, { Component } from 'react'

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserNameChange(value){
    this.setState({
      username: value
    });
  }

  handlePasswordChange(value){
    this.setState({
      password:value
    });
  }

  handleSubmit(){
    alert( `Username: ${this.state.username} Password: ${this.state.password}`)
  }
  
  
  render() {
    return (
      <div>

        <input onChange={e=> this.handleUserNameChange(e.target.value)} placeholder='username...' type="text"/>
        
        <input onChange={e=> this.handlePasswordChange(e.target.value)}
        placeholder= 'password...' type="text"/>


        <button onClick={this.handleSubmit}>Click me! </button> 
        
      </div>
    );
  }
}

export default Login;
