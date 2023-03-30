import { useState,useEffect } from "react";

function NewUseEffect(){
    const[data,setData]=useState(0)
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("data useEffect is working")
    },[data])
    useEffect(()=>{
        console.log("count useEffect is working")
    },[count])
    return(
        <div>
            <h1>Data:{data}</h1>
            <h1>Count:{count}</h1>
            <button onClick={()=>{setData(data+1)}}>click data</button>
            <button onClick={()=>{setCount(count+1)}}>click count</button>
        </div>
    )
}
export default NewUseEffect