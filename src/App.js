import React from "react";
import "./App.css";
import { todos } from "./todos.json";
import TodoForm from "./components/TodoForm";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };
  
  handleRemoveTodo(index){
    if(window.confirm("Estas seguro que queres eliminar esta tarea?")){
      this.setState({
        todos: this.state.todos.filter((todo,i) => i !== index)
      })
    }
  }

  render() {
    
    const showTodos = this.state.todos.map((todo, i) => (
        <div className="col-md-4" key = {i}> 
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>
                <b>{todo.responsible}</b>
              </p>
            </div>
            <div className="card-footer">
              <button
                className = "btn btn-danger"
                onClick ={this.handleRemoveTodo.bind(this,i)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ));
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>
            <div className="col-md-9">
              <div className="row">{showTodos}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
