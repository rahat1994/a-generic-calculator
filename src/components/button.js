import React, { Component } from 'react';
import { isNumber } from 'util';

export default class button extends Component {

    constructor(props) {
        super(props);
        
        let class_name = "";
        if (isNumber(this.props.number)){
            class_name = "button digits";
        }else{
            class_name = "button mathButtons";
        }

        this.state ={
            class_name:class_name
        };
    }
    componentDidMount(){

        console.log(this.props);
    }

    render() {
        
        return (
            <input className={this.state.class_name} type="button" value={this.props.number}/>
        )
    }
}



