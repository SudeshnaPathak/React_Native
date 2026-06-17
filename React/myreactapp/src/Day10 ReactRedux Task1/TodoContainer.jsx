import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_todo , update_todo, delete_todo} from './TodoAction';

export default function TodoContainer() {
  const todos = useSelector((state) =>state.todos);
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const editInputRef = React.useRef();
  const [editingTodoId, setEditingTodoId] = React.useState(null);

  function handleAddTodo(e) {
    e.preventDefault();
    const name = inputRef.current.value.trim();
    if(name)
    {
        dispatch(add_todo(name));
        inputRef.current.value = "";
    }
 }

 function handleUpdateTodo(id) {
    const updatedName = editInputRef.current.value.trim();
    if(updatedName)
    {
        dispatch(update_todo(id, { name: updatedName }));
        setEditingTodoId(null);
        editInputRef.current.value = "";
    }
}

  return (
    <div className='d-flex flex-column gap-2 align-items-center mt-5'>
      <h1>Todos App</h1>
      <form onSubmit={handleAddTodo} className='d-flex gap-2 w-75 justify-content-center mb-3'>
        <input type="text" ref={inputRef} placeholder='Enter todo' className='form-control form-control-lg'/>
        <button type='submit' className='btn btn-primary'>Add Todo</button>
      </form>
      <h2>Todo List</h2>
        <ul className='d-flex flex-column gap-2 w-75' 
        style={{listStyleType: "none", padding: 0}}>
            {todos.map((todo) => (
                <li key={todo.id}
                className='d-flex align-items-center justify-content-between gap-2 border shadow-sm rounded-3 p-2 mb-2'>
                    {editingTodoId === todo.id ? 
                    (
                        <div className='d-flex gap-2'>
                        <input
                            type="text"
                            defaultValue={todo.name}
                            ref={editInputRef}
                            className='form-control'
                        />
                        <button onClick={() => handleUpdateTodo(todo.id)} className='btn btn-outline-success'>✔️</button>
                        <button onClick={() => setEditingTodoId(null)} className='btn btn-outline-secondary'>❌</button>
                        </div>
                     ) :
                    (
                        <span className='fw-bold'>{todo.name}</span>
                    )}

                    <div className='d-flex gap-2 align-items-center'>
                    <select 
                        value={todo.status} 
                        onChange={(e) => dispatch(update_todo(todo.id, { status: e.target.value }))}
                        className='form-select border border-success border-2 rounded-3 w-auto'
                    >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    </select>

                    {editingTodoId !== todo.id && 
                        <button onClick={() => setEditingTodoId(todo.id)} className='btn btn-warning'>Edit</button>
                    }

                    <button onClick={() => dispatch(delete_todo(todo.id))} className='btn btn-danger'>Delete</button>
                    </div>
                </li>
            ))}
        </ul>

    </div>
  )
}
