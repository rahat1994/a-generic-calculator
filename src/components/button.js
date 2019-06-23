import React, { Component } from 'react';

export default class button extends Component {

    componentDidMount(){

        console.log(this.props);
    }

    render() {
        return (
            <input className="button digits" type="button" value={this.props.number}/>
        )
    }
}



