import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

import Table from './components/Table';
import Form from './components/Form';
// import Dictaphone from './components/Dictaphone';

import type { Expense } from './types/types';

function App() {
  const [ text, setText ] = useState('Hello MVP!');
  const [ expenses, setExpenses ] = useState<Expense[]>([]);

  const removeRow = (id: number) => {
    const filtered = expenses.filter(x => x.id != id);
    console.log('Filtered: ', filtered)
    setExpenses(filtered)
  }

  useEffect(() => {
    axios(`${import.meta.env.VITE_SERVER_URL}/`)
    .then((result) => setText(result.data))
    .catch(err => console.log('Error:', err));

    axios(`${import.meta.env.VITE_SERVER_URL}/expenses`)
    .then((result) => {
      console.log(result.data)
      setExpenses(result.data)
    })
    .catch(err => console.log('Error:', err));
  }, []);

  return (
    <div className='container'>
     <h1 className="text-3xl font-bold">
    {text}
    </h1>
    <br />

    <Table expenses={expenses} removeRow={removeRow}/>
    <br />
    <Form updateTable={setExpenses}/>
    <br />

    {/* <Dictaphone /> */}
    <br />
    </div>
  )
}

export default App
