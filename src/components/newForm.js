import React, { Component } from "react";

class NewForm extends Component { //es6
  constructor(props){
    super(props);
    this.state = {
      arr: [],
      user: {
        name: "",
        address: "",
        age: 0
      },
      inputValue: ""
    };
  }

  handleOnChange(event, key){
    let {user} = this.state;
    user[key] = event.target.value;
    this.setState({user});
  }
  // handleOnChange = (event, key) => {
  //   let {user} = this.state; //es6 object , arr des [a, b] = [1, 2,3,4] => a=1, b=2
  //   user[key] = event.target.value; 
  //   this.setState({user})
  // }

  printOnNameChange = (event) => { // es6
    let newUser = this.state.user;
    let newValue = event.target.value;
    newUser.name = newValue;
    this.setState({user: newUser});
    console.log('Your Name is :' ,event.target.value);
  };

  printOnAddressChange = (event) => {
    let newUser = this.state.user;
    let newValue = event.target.value;
    newUser.address = newValue;
    this.setState({ user: newUser });
    console.log('Your Address is :' ,event.target.value);
  };
  //api => es6 promise, callback, async/await
  printOnClickSubmit = () =>{
        let result = this.state.user; // user = {name: , address: } result = > arr[]
        let newArr = this.state.arr;
        newArr.push(Object.assign({}, result));
        this.setState({arr: newArr})
        console.log(this.state.user.arr); 
  }

  render() {
    return (
      <div>
        Name :
        <input
          placeholder="Enter you Name"
          type="text"
          value={this.state.user.name}
          onChange={event=>this.handleOnChange(event, 'name')}
        />
        {/* <p>Your Name is : {} </p> */}
        Address :
        <input
          placeholder="Enter you Address"
          type="text"
          value={this.state.user.address}
        //   onChange={this.handleOnChange}
        onChange={(event)=>{
            this.handleOnChange(event, 'address')
        }}
        />
        Age :
        <input
          placeholder="Enter you Age"
          type="number"
          value={this.state.user.age}
            onChange={event=>this.handleOnChange(event, 'age')}
        />
        {/* <p>Your Address is :{this.state.user.address}</p> */}
        <button onClick={this.printOnClickSubmit}>Submit</button>
        {this.state.arr.map((value, index)=> (<div key={index}>
            <p>Length: {this.state.arr.length}</p>
            <p>{value.name}</p>
            <p>{value.address}</p>
            <p>{value.age}</p>
        </div>))}
        {console.log(this.state.arr)}
      </div>
    );
  }
}

export default NewForm;
