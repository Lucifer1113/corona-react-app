import React, { Component } from "react";
class MyForm extends Component {
  state = {
    user: {
      name: "",
      age: "",
      address: "",
    },
  };

  handleOnNameChange = (event) => {
    let newUser = this.state.user;
    let nameValue = event.target.value;
    newUser.name = nameValue;
    this.setState({ user: newUser });
  };
  handleOnAgeChange = (event) => {
    let newUser = this.state.user;
    let ageValue = event.target.value;
    newUser.age = ageValue;
    this.setState({ user: newUser });
  };
  handleOnAddressChange = (event) => {
    let newUser = this.state.user;
    let addressValue = event.target.value;
    newUser.address = addressValue;
    this.setState({ user: newUser });
  };

  handleOnClickSubmit = (event) => {
    event.preventDefault();
    let newUser = Object.assign({}, this.state.user);
    this.props.addNewUser(event, newUser);
  };

  render() {
    return (
      <form>
        Name:
        <input
          id="name"
          value={this.state.user.name}
          onChange={this.handleOnNameChange}
        />
        <p>Your Name is : {this.state.user.name}</p>
        Age:
        <input
          type="number"
          value={this.state.user.age}
          onChange={this.handleOnAgeChange}
        />
        <p>Your Age is : {this.state.user.age}</p>
        Address:
        <input
          value={this.state.user.address}
          onChange={this.handleOnAddressChange}
        />
        <p>Your Address is : {this.state.user.address}</p>
        <button type="reset" onClick={this.handleOnClickReset}>Reset</button>
        <button type="submit" onClick={this.handleOnClickSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default MyForm;
