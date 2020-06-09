import React, { Component } from "react";

class NewUsers extends Component {

  render() {
    return (<div>
                    <h1> {this.props.allUsers.map((value,index) => (<div>
                        <p>{value.name}</p>
                        <p>{value.age}</p>
                        <p>{value.address}</p>
                    </div>

                        ))} </h1>    
        </div>);
  }
}

export default NewUsers;
