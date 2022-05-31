import { useEffect, useState } from "react";

export function Repositorylist(){
    const [list, setLit] = useState([])
    const getRepositories = async() =>{
       const respone = await fetch("https://api.github.com/users/Bruno97855/repos")
       const repos = await respone.json();
       setLit(repos)
       console.log(repos)
    }

    useEffect(()=>{
        getRepositories()
    },[])
return(
<div>
    {list.map((rep) => (
        <p>{rep.name}</p>
    ))}

</div>
)
}