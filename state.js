import { useState } from "react";
function UpdateState(){
   const [data,setdata]= useState(0)
   function updatedata(){
    setdata(data+1)
   }
   return(
    <div>
        <h1>{data}</h1>
        <button onClick={updatedata}>click here</button>
    </div>
   )
}
export default UpdateState