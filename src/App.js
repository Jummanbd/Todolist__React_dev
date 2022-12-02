import React, { useState, useEffect } from 'react';
// importaing Components
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodeList';
function App() {
  const [inputText, setInputText] = useState();
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //  use effect 

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  // Functions

  const filterHandler = () => {
    switch(status) {
      case 'completed': 
       setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case 'uncompleted': 
       setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Ed`s Todo List!  </h1>
      </header>
      <Form 
      setInputText = {setInputText} 
      inputText = {inputText}  
      todos ={todos} 
      setTodos ={setTodos} 
      status = {status} 
      setStatus = {setStatus} 
      filteredTodos = {filteredTodos}
      
       />
      <TodoList  setTodos={setTodos} todos = {todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
