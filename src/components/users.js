import React, { Component } from 'react';

class Users extends Component {
    render() { 
        return ( <div>
            {this.props.allUsers.map((value, index)=>(<div key={index}>
                <span>{value.name}</span>
                <span>{value.age}</span>
                <span>{value.address}</span>
            </div>))}
        </div> );
    }
}
 
export default Users;