import React from 'react';

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  const handleStrike = (event) => {
    event.target.style.setProperty('text-decoration', 'line-through');
  };

  return (
    <ul className='allTodos'>
      {todos.map((t) => (
        <li className='singleTodo'>
          <span className='todoText' key={t.id} onClick={handleStrike}>
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
