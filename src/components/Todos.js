import React, { Component } from "react";
import "../Styles/Todos.css";
import axios from 'axios';

class Todos extends Component {
  constructor(props){
    super(props);
    this.state = {
      arr: [],
      todoData: {
        title: "",
        // createdAt: ''
      },
    };
    console.log('constructor')
  }
  
  componentDidMount() {
    //api call
    console.log(componentDidMount()); 
    // GET API
    let url = 'https://jsonplaceholder.typicode.com/todos'; // backend
    axios.get(url)
    .then(data=>{
      console.log('data', data.data);
      this.setState({arr: data.data})
    })
    .catch(err=>{
      console.log(err);
    })
  }

  handleOnChange = (event) => {
    let newTitle = this.state.todoData;
    newTitle.title = event.target.value;
    this.setState({ todoData: newTitle });
  };

  handleOnClick = () => {
    let {arr, todoData} = this.state;
    if(todoData.title === '') return alert("Invalid Todo Name");
    
    let getIndex = arr.findIndex((todo) => todo.title === todoData.title); // check todo already exits or not
    if(getIndex > -1) return alert("This work is already added in the list");

    let result = todoData;
    result.createdAt = new Date();
    let newArr = arr;
    newArr.push(Object.assign({}, result));
    this.setState({ arr: newArr });
  };

  handleDelete = (index) => {
    let {arr}  = this.state;
      arr.splice(index, 1);
      this.setState({arr});  
  }
  
  handleEdit = (index, value) => {
    let {arr} = this.state;
    let newTodoValue = prompt('Enter New Value for Selected Todo', arr[index].title);
    if (newTodoValue==='') return alert('You cannot have an empty Todo');
    if ( newTodoValue=== null) return alert('Dont want to change the current Todo???')
    arr.splice(index, 1, {value, title: newTodoValue});
    this.setState({arr});
  }
  
  render() {
    console.log('render')
    return (
      <div className="body">
        <h1>Your Todos</h1>
        <div>
          <div className="entries">
            <span>Enter your Todos :</span>
            <input
              value={this.state.todoData.title}
              onChange={this.handleOnChange}
              type="text"
            />
          </div>
          <div className="btn">
            <button onClick={this.handleOnClick}>Add Your Todo</button>
          </div>
        </div>
        <div className="todo-list">
          <p>Total Pending Work : {this.state.arr.length}</p>
          <ol>
            {this.state.arr.map((value, index) => (
              <div className="todo-list-items" key={index}>
                <li>{value.title}</li>
                <div>
                <span style={{cursor: 'pointer'}} onClick={()=> this.handleEdit(index)}><ion-icon name="create-outline"></ion-icon></span>
                <span style={{cursor: 'pointer'}} onClick={()=> this.handleDelete(index)}><ion-icon name="close-circle-outline"></ion-icon></span>

                </div>
                
              </div>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Todos;
