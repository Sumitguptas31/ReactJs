import { useState } from "react"
function ControlledComponent(){
    const{val,setVal}= useState("")
    const{data,setData}=useState("")
    return(
        <div>
            <h1>controlled component</h1>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.val)}/>
            <input type="text" value={data} />
           
            <button>click here</button>
        </div>
    )
}
 export default ControlledComponent