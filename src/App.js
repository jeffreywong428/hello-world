import React, { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      repoName: null
    };
    
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    fetch ("https://api.github.com/users/jserv/repos", {method:"GET"})
    .then(res => res.json())
    .then(data => {
      this.setState({repoName: data[0]["name"]})
    })
    .catch(e => {
      console.log(e);
    })
  }


  render(){
    return (
      <div>
        <div>
          {(this.state.repoName===null ? "目前還有沒有資料" : this.state.repoName)}
        </div>
        <button onClick={this.handleClick}>取得jserv以英文字母排序的第一個repo</button>
      </div>
    )
  };
}

export default App;
