import { useState,useEffect } from "react"
function UseEffect(){
      const [data,setdata]=useState(0)
    useEffect(()=>{
        console.log("useEffect is working")
    })
    return(
        <div>
            <h1>useEffect in react {data}</h1>
            <button onClick={()=>{setdata(data+1)}}>click me</button>
        </div>
        
    )
}
export default UseEffect