import React,{useState} from 'react'


 
export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("");

    const handleOnChange=(e)=>{
      setValue(e.target.value)
       }

const handleOnSubmit=(e)=>{
e.preventDefault();
addTodo(value)
setValue("")

}


  return (
    <form  className='TodoForm' onSubmit={handleOnSubmit} >
      <input type="text" className='todo-input' value={value}
       placeholder="Enter task for Today!!" onChange={handleOnChange} />
       <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
