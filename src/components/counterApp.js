import React, { Component } from 'react';
class CounterApp extends Component {
      
  state = {
    count: 0
  }
  
  myOnClick = () => {
    this.setState({count: this.state.count+1})
    console.log('count', this.state.count);
  }

  render(){
    return(
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.myOnClick}>Click Me</button>
      </div>
    )
  }
}
 
export default CounterApp;