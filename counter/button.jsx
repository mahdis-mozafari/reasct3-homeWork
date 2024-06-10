import {useState} from 'react'

export function Button(){
    const [count , setcount]=useState(0)
   return(
    <>
    <p>number is {count}</p>
<button onClick={()=> setcount(count +1)}>+</button>
<button onClick={()=>setcount(count - 1)}>-</button>
<button onClick={()=> setcount(0)}>0</button>
    </>
    ) 
}