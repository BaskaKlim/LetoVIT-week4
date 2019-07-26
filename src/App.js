import React, { Component } from 'react';
import moment from "moment";
import axios from './axios.js';

import Todo from './Todo';
import AddTodo from './AddTodo';


class App extends Component {
  state = {
    // treba si vymazat todo ktore boli na tvrdo dane lebo nemali id, vedeli by sme k nim pridat ide ale neboli by v databaze  preto treba pole prazne
    todos: []
  };

  // 

  async componentDidMount() {
    const todos = await axios.get('/todos.json');
    console.log(todos)
    const result = [];

    if (todos.data) Object.keys(todos.data).forEach(key => {

      const todo = todos.data[key];
      todo.id = key;
      result.push(todo)

    });
    this.setState({
      todos: result

    });
  }


  // funkcia ktora mi vytvori novy todo = teda drzi obsah
  addTodo = async todo => {
    const newTodo = {
      ...todo,
      createdAt: moment().format('DD.MM.YYYY'),
      finished: false
    };
    const result = await axios.post('/todos.json', newTodo)
    newTodo.id = result.data.name;

    this.setState(prevState => ({
      todos: prevState.todos.concat(newTodo)

    }));

  };

  editTodo = (todo, index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1, todo);
    this.setState({ todos: todos })
  };


  render() {
    const todos = this.state.todos;
    return (
      <div className="App p-3">
        {/* pridat vyrenderovanie noveho komponentu AddTodo */}
        {/* do komponentu si musim pridat aj funkciu addTodo */}
        <AddTodo onAdd={this.addTodo} />
        {todos.map((todo, index) => {
      
          const handleFinishTodo =()=>{
            todo.finished = true;
            this.editTodo(todo, index);
          };

          return (
            <Todo todo={todo} key={todo.id} onFinish={handleFinishTodo} />
          )
        })}
      </div>

    );

  }
}

export default App;

