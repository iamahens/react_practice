import React from 'react'
import './index.css';
import { list } from 'postcss';

const App = () => {
  const name = 'Sneha';
  const x=10;
  const y=20;
  const names = ['Brad', 'Harry', 'Ron', 'Hermoine'];
  return (
    <div>
    <div className="text-20xl">
      App
    </div>
    <p>Hello {name}</p>
    <p>The sum of {x} and {y}  is {x+y}</p>
    <ul>
      {
        names.map((names) =>( <li>{names}</li>))
      }
    </ul>
    </div>
  )
};

export default App;
