import React, { Component } from "react";

class Count extends Component {
  state = {
    count: 0
  }
  increamentOnClick=()=> {
    this.setState({count:this.state.count+1})
    console.log( 'Count :', this.state.count);
  }
  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={this.increamentOnClick}>Increament</button>
      </div>
    )
  }
}

export default Count;
