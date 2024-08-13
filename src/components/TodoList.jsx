import { useState } from 'react'
import Form from './Form';
import Todo from './Todo';
import {v4 as uuidv4} from 'uuid'
import Edit from './Edit';
uuidv4()

const TodoList = () => {
    const [todoValue, setTodo] = useState([]);

    const createTodo = todo => {
        setTodo([...todoValue, {id: uuidv4(), task:todo, isEditing:false}])
    }

    const deleteTodo = id =>{
        setTodo(todoValue.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodo(todoValue.map(todo => todo.id === id ? {...todo,isEditing:!todo.isEditing}: todo))
    }

    const editTask = (task, id) => {
        setTodo(todoValue.map(todo => todo.id === id ? {...todo,task, isEditing: !todo.isEditing} : todo))
    }

    return (
        <div className='flex items-center flex-col justify-center'>
        <h1 className='pt-20 text-5xl text-white'>Todo List</h1>
        <div className="container bg-gray-700 mt-20 p-8 rounded-md">
            <Form createTodo = {createTodo}/>
            {
            todoValue.map((todo, index) =>(
                todo.isEditing ? (
                    <Edit key={index} editTodo={editTask} task={todo}/>
                ):(
                    <Todo task={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo}/>
                )
            ))}
        </div>
        </div>)
}

export default TodoList