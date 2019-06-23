import React, { Component } from 'react';
import { isNull, isNumber } from 'util';

export default class button extends Component {

    constructor(props) {
        super(props);
  
        this.state ={
            class_name:''
        };
    }
    componentDidMount(){

        console.log(this.props);
    }

    render() {

        if (isNumber(this.props.number)){
            this.state.class_name = "button digits";
        }else{
            this.state.class_name = "button mathButtons";
        }

        return (
            <input className={this.state.class_name} type="button" value={this.props.number}/>
        )
    }
}



