import React, { Component } from 'react';
import './App.css';

import Button from './components/button';

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

      <div className="container">
        <fieldset id="container">
          <form name="calculator">
      
            <input id="display" type="text" name="display" readOnly/>

            <Button number="7" />
            <Button number="8" />
            <Button number="9" />
            <input className="button mathButtons" type="button" value="+" />
            <br/>

            <Button number="4" />
            <Button number="5" />
            <Button number="6" />
            <input className="button mathButtons" type="button" value="-" />
            <br/>

            <Button number="1" />
            <Button number="2" />
            <Button number="3" />
            <input className="button mathButtons" type="button" value="x" />
            <br/>

            <input id="clearButton" className="button" type="button" value="C" />
            <input className="button digits" type="button" value="0" />
            <input className="button mathButtons" type="button" value="=" />
            <input className="button mathButtons" type="button" value="/"/>
          </form>
        </fieldset> 
      </div>
    
    )};
    
}

export default App;
