import React, { Component } from 'react';

class Nav extends Component {
    render() { 
        return ( 
            <div>
                <p>Nav - {this.props.name}</p>
            </div>
         );
    }
}
 
export default Nav;


