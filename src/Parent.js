import React, { Component } from 'react';
import Brother from "./Brother";
import Sister from "./Sister";
class Parent extends Component{
  constructor(props) {
    super(props);
    this.state={ 
      moneyForBrother:60,
      moneyForSister:40,
      argue:"null"
    }

    this.setArgue=this.setArgue.bind(this);
  }

    setArgue(argue){
      this.setState({argue: argue});
    }

    render(){
        return(
          <div>
              <Sister money={this.state.moneyForSister} argue={this.state.argue}  setArgue={this.setArgue} />
          </div>
        );
    }
}
export default Parent;
