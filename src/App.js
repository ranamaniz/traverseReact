import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Header from './components/layout/Header';

import './App.css';

import uuid from 'uuid';


class App extends React.Component {

  state = {
    todos: [
      {
        id:uuid.v4(),
        title:"Meet Holmes",
        completed: false
      },
       {
        id:uuid.v4(),
        title:"Meet Sara",
        completed: true
      },
      {
        id:uuid.v4(),
        title:"Meet Harry",
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id)=>{
    console.log(id);
    this.setState({ todos : this.state.todos.map((todo) => {
            if(todo.id === id){
              todo.completed = !todo.completed;
            }
            return todo;
          }) });
  }

  // 
  delTodo = (id)=>{
    this.setState({todos: [...this.state.todos.filter(todo => (todo.id !== id) )]})
  }

  addTodo = (title)=>{
    const newTodo = {
      id:uuid.v4(),
      title,
      completed:false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    // console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="maincontainer">
            <Header />
            <Route exact path="/" render={props=>(  
              <React.Fragment> 
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo ={this.delTodo} />
              </React.Fragment>
            )}/>

            <Route path="/About" component={About}/>
          </div>
        </div>
      </Router>
    ); 
  }
}

export default App;
