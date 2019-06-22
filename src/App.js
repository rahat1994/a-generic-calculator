import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state={
    message:""
  };

  componentDidMount(){
      this.setState({
                    message:"Hello There"
                  })
  }

  render(){
    return (

      <div>
          <h1>{this.state.message}</h1>
      </div>
    
      )};
    
}

export default App;
