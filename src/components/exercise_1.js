import React ,{ useState } from 'react';

function ExerciseOne (){
const [counter,setCounter]= useState(0);
const handleAdd =()=>{
setCounter(counter+1);
}
const handleSub =()=>{
    setCounter(counter-1);
    }
    const handleRest =()=>{
           setCounter(0);
        }
return (
    <div>
     <p> Counter : {counter}</p>
     <input type='button' value='Add' onClick={handleAdd}/>
      <input type='button'  value='sub' onClick={handleSub}/>
      <input type='button' value='reset' onClick={handleRest}/>
    </div>
);


}
export default ExerciseOne;
