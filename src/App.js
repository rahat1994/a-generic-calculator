import React, { Component } from 'react';
import './App.css';

import Button from './components/button';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state ={
        display_val:"5"
    };
}
  
  componentDidMount(){
      this.setState({
                    message:"Hello There"
                  })
  }

  render(){
    return (

      <div className="container">
        <fieldset id="container">
          <form name="calculator">
      
            <input id="display" type="text" name="display" value={this.state.display_val} readOnly/>

            <Button number="7" />
            <Button number="8" />
            <Button number="9" />
            <Button number="+" />
            
            <br/>

            <Button number="4" />
            <Button number="5" />
            <Button number="6" />
            <Button number="-" />
            
            <br/>

            <Button number="1" />
            <Button number="2" />
            <Button number="3" />
            <Button number="x" />
            <br/>

            <input id="clearButton" className="button" type="button" value="C" />
            <Button number="0" />
            <Button number="=" />
            <Button number="/" />
          </form>
        </fieldset> 
      </div>
    
    )};
    
}

export default App;
