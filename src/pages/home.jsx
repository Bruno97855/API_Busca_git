import { useState } from "react";
import { Button } from "../components/button";
import '../CSS/style.css'

export function Home(){
    const [x, setX] = useState("")
return(
    
<div className="DivCenter">
    <input value={x} className="text-box" onChange={(e)=>setX(e.target.value)}/>
    <Button title={"botao"} value={x}></Button>
</div>
)

}