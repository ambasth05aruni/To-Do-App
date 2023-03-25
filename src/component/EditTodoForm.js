import React,{useState} from 'react'


 
export const EditTodoForm = ({editTodo, task}) => {
    const [value,setValue] = useState(task.task);

    const handleOnChange=(e)=>{
      setValue(e.target.value)
       }

const handleOnSubmit=(e)=>{
e.preventDefault();
editTodo(value,task.id)
setValue("")

}


  return (
    <form  className='TodoForm'onSubmit={handleOnSubmit} >
      <input type="text" className="todo-input" value={value}
       placeholder="Update Task" onChange={handleOnChange} />
       <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}