/* Sister.js */

import React, { Component } from 'react';
class Sister extends Component {
    constructor(props) {
        super(props);

        this.callArgue = this.callArgue.bind(this);
    }


    callArgue() {
        this.props.setArgue("Sister");
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.money!==this.props.money){
            this.setMyFeeling();
        }
    }

    render() {
        return (<div>I am {this.props.argue}, I took{this.props.money}
            <div><button onClick={this.callArgue}>Change Owner</button></div>
        </div>);
    }
}
export default Sister;