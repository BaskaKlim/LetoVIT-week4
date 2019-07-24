import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from  './AddTodo';




class App extends Component {
  state = {
    todos: [
      {
        title: 'Precvic si JavaScript',
        createdAt: '23.09.1988',
        finished: false,
        text: `<ul class="list-group list-group-flush">
        <li class="list-group-item">Learn2Code kurz</li>
        <li class="list-group-item">Vypracuj Petove cvicenia</li>
        <li class="list-group-item">Domace ulohy z Leto v IT </li>
      </ul> `
      },
      {
        title: 'Nauc sa React',
        createdAt: '17.07.2019',
        finished: true,
        text: `<ul class="list-group list-group-flush">
        <li class="list-group-item">Calamada</li>
        <li class="list-group-item">Civapcici</li>
        <li class="list-group-item">Cucoriedky </li>
      </ul> `
      },
      {
        title: 'Zaverecny projekt',
        createdAt: '28.08.2019',
        finished: false,
        // ak by som to chcela dat spravne tak si tu dam list a taham to cez array stringov a cez map, po spravnosti si spravit novy komponent list
        text: `<ul class="list-group list-group-flush">
        <li class="list-group-item">Learn2Code kurz</li>
        <li class="list-group-item">Vypracuj Petove cvicenia</li>
        <li class="list-group-item">Domace ulohy z Leto v IT </li>
      </ul> `
      }

    ]
  }


  render() {
    const todos = this.state.todos;
    return (
      <div className="App p-3">
        {/* pridat vyrenderovanie noveho komponentu AddTodo */}
        <AddTodo/>
        {todos.map(todoData => {
          return (
            <Todo todo={todoData} />
          )
        })}
      </div>

    );
  }
}

export default App;

