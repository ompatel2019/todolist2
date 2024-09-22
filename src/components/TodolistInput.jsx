import React, { useState } from 'react'

const TodolistInput = ({addTodos}) => {

    const [todo, setTodo] = useState('')

    return (
        <>
            <header className='py-12 flex flex-col px-24 items-center space-y-8'>
                <h1 className='font-sans text-center font-bold text-5xl text-gray-700'>
                    Todo-List: Add, Edit and Delete Todos
                </h1>

                <div className='w-[75%] space-x-4'>
                    <input className='w-[75%] p-2 px-4 rounded-md border-2' type="text" value={todo} onChange={(e) => {setTodo(e.target.value)}} placeholder='Add a todo...' />
                    <button onClick={() => addTodos(todo)} className='w-[20%] p-2 border-2 text-white font-black bg-green-400 rounded-md hover:bg-green-600 transition-all hover:px-4 hover:text-gray-200'>Add</button>
                </div>  

            </header>
        </>
    )
}

export default TodolistInput