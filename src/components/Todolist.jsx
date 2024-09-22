import React from 'react'
import TodolistCard from './TodolistCard'

const Todolist = ({todos, deleteTodos, editTodos}) => {
  return (
    <>
        <ul className='space-y-4 px-48'>
            {todos.map((todo, index) => {
                return (
                    <TodolistCard key={index} todo={todo} index={index} deleteTodos={deleteTodos} editTodos={editTodos}>
                    </TodolistCard>
                )
            })}
        </ul>
    </>
  )
}

export default Todolist