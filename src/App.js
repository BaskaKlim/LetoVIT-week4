import React from 'react';
import Todo from './Todo';

function App() {
  return (
    <div className="App p-3">
      <Todo title="Nakupny zoznam" createdAt="23.09.1988" finished={false}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Calamada</li>
          <li class="list-group-item">Civapcici</li>
          <li class="list-group-item">Cucoriedky </li>
        </ul>

      </Todo>
      <Todo title="Urob si ulohy z Reactu" createdAt="15.07.2019" finished={true}></Todo>


      <Todo title="Precvic si JavaScript" createdAt="19.07.2019" finished={false}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Prezentacia z hodiny</li>
          <li class="list-group-item">Domace ulohy</li>
          <li class="list-group-item">Cvicenia z hodiny </li>
        </ul>
      </Todo>
    </div>
  );
}

export default App;

