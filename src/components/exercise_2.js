import React ,{ useState } from 'react';

function ExerciseTwo (){
 const [color , setColor] = useState('#fff');
const colors = [{name : 'red',hex:'#f00' },{name : 'green',hex:'#0f0' },{name : 'blue',hex:'#00f' },{name : 'violet',hex:'#7f00ff' }] 
const handleClicked = (e)=>{
setColor(e.target.value)
}
    return (
        <div style={{backgroundColor: color}} >
            {colors.map((color)=>
                
                <button value={color.hex} onClick={handleClicked} >{color.name}</button>
            )}
        </div>
    )
}

export default ExerciseTwo