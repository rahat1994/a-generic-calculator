import React, { Component } from 'react';
import { isNumber } from 'util';


const CalculatorOperations = {
    '/': (prevValue, nextValue) => prevValue / nextValue,
    '*': (prevValue, nextValue) => prevValue * nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '=': (prevValue, nextValue) => nextValue
  }

export default class button extends Component {

    constructor(props) {
        super(props);

        console.log(CalculatorOperations);
        
        let class_name = "";
        if (isNumber(this.props.button_value)){
            class_name = "button digits";
        }else{
            class_name = "button mathButtons";
        }

        this.state ={
            class_name:class_name
        };
    }


    

    handleKeyDown = (event) => {
        let { key } = event
        
        if (key === 'Enter')
          key = '='
        
        if ((/\d/).test(key)) {
          event.preventDefault()
          this.inputDigit(parseInt(key, 10))
        } else if (key in CalculatorOperations) {
          event.preventDefault()
          this.performOperation(key)
        } else if (key === '.') {
          event.preventDefault()
          this.inputDot()
        } else if (key === '%') {
          event.preventDefault()
          this.inputPercent()
        } else if (key === 'Backspace') {
          event.preventDefault()
          this.clearLastChar()
        } else if (key === 'Clear') {
          event.preventDefault()
          
          if (this.state.displayValue !== '0') {
            this.clearDisplay()
          } else {
            this.clearAll()
          }
        }
      };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
      }
      
      componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
      }

    render() {

        return (
            <input className={this.state.class_name} type="button" value={this.props.button_value}/>
        )
    }
}



