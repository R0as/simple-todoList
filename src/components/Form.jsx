import { useState } from 'react'

const Form = ({createTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        createTodo(value);
        setValue('')
    }

    return(
    <form className="w-full mb-4" onSubmit={handleSubmit}>
        <input type="text" className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300" 
        placeholder="Qual tarefa você tem para fazer?" 
        onChange={(e)=> setValue(e.target.value)} value={value}
        />
        <button className="bg-gray-500 border-none p-4 text-white cursor-pointer rounded ml-2">Adicionar Tarefa</button>
    </form>
    )
}

export default Form