import { useState } from 'react'

const Edit = ({editTodo, task}) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        editTodo(value, task.id);
        setValue('')
    }

    return(
    <form className="w-full mb-4" onSubmit={handleSubmit}>
        <input type="text" className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300" 
        placeholder="Altere a tarefa a ser feita" 
        onChange={(e)=> setValue(e.target.value)} value={value}
        />
        <button className="bg-gray-500 border-none p-2 text-white cursor-pointer rounded ml-2">Alterar Tarefa</button>
    </form>
    )
}

export default Edit