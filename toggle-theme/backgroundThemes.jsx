import {useState} from 'react';
export function ToggleThemes (){
    const[coler , setColer]= useState(false)
    const handelClick =()=>{
        setColer(e => !e)
    }
    return(
        <>
        <body  style={
            {
                backgroundColor:coler ? 'green': 'black',
            }
        }>
        <p style={{coler:"white", margin:'2rem'}}>color:{coler? 'green':'black'}</p>
        <button onClick={handelClick}>change background</button>
         </body>
        </>
    )
}