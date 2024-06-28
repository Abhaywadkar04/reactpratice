import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [editedTodoId, setEditedTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState('');

  const handleEdit = (todoId, todoText) => {
    setEditedTodoId(todoId);
    setEditedTodoText(todoText);
  };

  const handleUpdate = () => {
    if (editedTodoId && editedTodoText) {
      dispatch(updateTodo({ id: editedTodoId, text: editedTodoText }));
      setEditedTodoId(null);
      setEditedTodoText('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      
      <ul className="list-none w-full max-w-md">
        {todos.map((todo) => (
          <li
            className="flex justify-between items-center bg-zinc-800 px-4 py-2 rounded mb-2"
            key={todo.id}
          >
            <div className="flex-1 text-white">
              {editedTodoId === todo.id ? (
                <input
                  type="text"
                  value={editedTodoText}
                  onChange={e => setEditedTodoText(e.target.value)}
                  className="bg-transparent text-white w-full focus:outline-none"
                />
              ) : (
                <p>{todo.text}</p>
              )}
            </div>
            <div className="flex items-center">
              {editedTodoId === todo.id ? (
                <button
                  onClick={handleUpdate}
                  className="text-white bg-green-500 border-0 py-1 px-2 focus:outline-none hover:bg-green-600 rounded text-sm mr-2"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo.id, todo.text)}
                  className="text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm mr-2"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;