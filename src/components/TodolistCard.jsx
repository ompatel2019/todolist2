import React, { useState } from 'react'

const TodolistCard = ({ todo, index, editTodos, deleteTodos }) => { 
    const [showInput, setShowInput] = useState(false); // Set initial state to false to hide input initially
    const [newInput, setNewInput] = useState('');

    const handleEdit = () => {
        if (newInput.trim() === '') return; // Prevent editing with empty input
        editTodos(newInput, index); // Pass the new input value and index to editTodos
        setNewInput(''); // Clear input after editing
        setShowInput(false); // Hide input after editing
    };

    return (
        <>
            <li className='flex p-4 space-x-2 bg-white rounded-lg justify-between px-8'>
                <p>
                    {todo}
                </p>
                <div className='space-x-4'>
                    {showInput && (
                        <div>
                            <input
                                type="text"
                                value={newInput}
                                onChange={(e) => setNewInput(e.target.value)}
                                className='border-2 rounded-md px-2'
                                placeholder='Add new todo here...'
                            />
                            <button
                                onClick={handleEdit}
                                className='border-2 px-2 rounded-md text-white bg-green-400'
                            >
                                Add
                            </button>
                        </div>
                    )}
                    <button onClick={() => setShowInput(prev => !prev)}>
                        <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => deleteTodos(index)}>
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </li>
        </>
    );
}

export default TodolistCard;
