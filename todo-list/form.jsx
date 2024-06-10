import { useState } from "react";
export function Form(){  
 const [text , setText]=useState("")
 const [count , setCount]= useState([])
 function clickHandeler() {
    if(text.trim()){
    setCount([...count, text]);
    setCount(count.concat(text));
    setText("")
     }
 }
 console.log(count);

 function deleteHandeler(e) {
  setCount(count.slice(1))
 }
 return(
        <>
            <label htmlFor="todo">write text:</label>
        <br />
        <input type="text"
        name="todo"
        id="todo"
        value={text}
        placeholder="Write your next task"
        onChange={(e)=>setText(e.target.value)}/>
       
        <ul>
            {
                count.map((value,i)=>{
                    return <li key={i}>{value}</li>
                           
                })
            }
        </ul>
        <button onClick={clickHandeler}> 
            submit
        </button>
        <button 
        onClick={deleteHandeler}
        >
            delete
        </button>
        </>
    )
    }