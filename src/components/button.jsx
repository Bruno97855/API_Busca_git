import { useState } from "react";
import '../CSS/style.css'

function Button(props){
    const [list, setLit] = useState([])
    
    async function Funcaoclick(value){
        debugger
        try{
            if(value != ""){
                const respone = await fetch("https://api.github.com/users/"+value+"/repos")
                const repos = await respone.json();
                setLit(repos)
                console.log(repos)
            }
            
        }finally{
            alert("Nome do Git inválido!!!")
        }
    }
 return(
    <>
    <button className="button" onClick={()=>Funcaoclick(props.value)}>{props.title}</button>
    {list.map((rep) => (
        <p>{rep.name}</p>
    ))}
    </>
)
}
export {Button};