import React ,{ useState } from 'react';

function ExerciseThree (){
    const [todos , setTodo] = useState([{id : 0 ,description : 'Good morning'}]);
    const [ newTodo , setNew ] = useState();
  
    const handleDelete =(index)=>{
   setTodo(todos.filter( (task) => task.id !==index))
       }
    const handleChange = (e)=>{
     setNew(e.target.value)
    
    }
    const handleAddNew = ()=>{
      const id =Math.random();
      const newTodos = [...todos,{ id:id ,description :newTodo}]
         setTodo(newTodos)
         
    } 

return(
  
    <div>
        <ul>
        {todos.map((todo)=>
        {return <>
      
        <li key={todo.id}>{todo.description}</li>
          <button  onClick={()=>handleDelete(todo.id)} >delete</button>
        </>
    })} </ul>
    <div>
        <input type='text' onChange={handleChange}/>
    <input type='button' value = 'Add New' onClick={handleAddNew} />
    </div>
      
    </div>




);


}



export default ExerciseThree