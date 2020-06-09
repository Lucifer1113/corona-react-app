import React, {Component} from 'react';
// import Todos from './components/Todos';
import Covid19 from './components/Covid19';
// import Todos from './components/Todos';
// import Counter from './components/counterApp';
// import Nav from './components/nav';
// import Users from './components/users';
// import Form from './components/form';
// import Count from './components/Count';

export default class App extends Component {


    render(){
      return(
        <Covid19/>
      );
    }




































  // state={
  //   users: [
  //     {name: 'Manish', age: 10, address: 'India'},
  //     {name: 'Ravi', age: 10, address: 'India'},
  //     {name: 'Shail', age: 10, address: 'India'}
  //   ]
  // }
  // addNewUser = (newUser) => {
  //   console.log('app.js', newUser)
  //   let newUsers = this.state.users;
  //   newUsers.unshift(newUser);
  //   this.setState({users: newUsers});
  // }

  // render(){
  //   return (<div>
  //     {/* <Nav name={'Facebook'}/>
  //     <Counter/>
  //     <Users allUsers={this.state.users}/>

  //     <Nav age={10} name={'My Nav'}/> */}
  //     {/* <Form addNewUser={(event, newUser)=>this.addNewUser(newUser)}/> */}
  //     {/* <Users allUsers={this.state.users}/> */}
  //     <Count/>
  //   </div>)
  // }
}