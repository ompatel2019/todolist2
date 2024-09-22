import React, { useState, useEffect } from 'react'
import TodolistInput from './components/TodolistInput'
import Todolist from './components/Todolist'

const App = () => {

  const persist = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify({ todos: newTodos}))
  };

  const [todos, setTodos] = useState([]);

  const addTodos = (newTodo) => { 
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    persist(newTodos);
  }

  const editTodos = (newTodo, index) => { 
    const newTodos = [...todos];
    newTodos[index] = newTodo;
    setTodos(newTodos);
    persist(newTodos);
  }

  const deleteTodos = (index) => { 
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex != index;
    })
    setTodos(newTodos);
    persist(newTodos);
  }

  useEffect(() => { 
    if (!localStorage) { 
      return;
    }

    const todos = localStorage.getItem('todos');
    if (!todos) { 
      return;
    }

    const parsedTodos = JSON.parse(todos).todos;
    setTodos(parsedTodos);
  }, [])

  return (
    <>
      <TodolistInput addTodos = {addTodos}/>
      <Todolist todos = {todos} editTodos = {editTodos} deleteTodos = {deleteTodos}/>
    </>
  )
}

export default App