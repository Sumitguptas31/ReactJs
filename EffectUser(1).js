import { useState,useEffect } from "react";
import EffectUser from "./EffectUser";

function PropsEffect(){
    const[data,setData]=useState(0)
    const [count,setCount]=useState(0)
    return(
        <div>
            <EffectUser count={count} data={data}/>
            <button onClick={()=>{setData(data+1)}}>click data</button>
            <button onClick={()=>{setCount(count+1)}}>click count</button>
        </div>
    )
}
export default PropsEffect