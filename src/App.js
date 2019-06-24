import React, { Component } from 'react';
import './App.css';

import Button from './components/button';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state ={
        display_val:"0"
    };
}
  
  componentDidMount(){
      
  }

  render(){
    return (

      <div className="container">
        <fieldset id="container">
          <form name="calculator">
      
            <input id="display" type="text" name="display" value={this.state.display_val} readOnly/>

            <Button button_value="7" />
            <Button button_value="8" />
            <Button button_value="9" />
            <Button button_value="+" />
            
            <br/>

            <Button button_value="4" />
            <Button button_value="5" />
            <Button button_value="6" />
            <Button button_value="-" />
            
            <br/>

            <Button button_value="1" />
            <Button button_value="2" />
            <Button button_value="3" />
            <Button button_value="x" />
            <br/>

            <input id="clearButton" className="button" type="button" value="C" />
            <Button button_value="0" />
            <Button button_value="=" />
            <Button button_value="/" />
          </form>
        </fieldset> 
      </div>
    
    )};
    
}

export default App;
