import { useMemo, useState } from "react"
function UseMemo(){
    const[count,setCount]=useState(0)
    const[data,setData]=useState(10)
    const UpdateCount= useMemo(  function update(){
        console.log("updateCount function is calling")
       return count*5
    },[count])
    const UpdateData= useMemo(()=>{
        console.log("updateData function is calling")
        return data*10
    },[data])
    // function update(){
    //     console.log("update function is calling")
    //    return count*5
    // }
  return(
    <div>
    <h1>Use Memo</h1>
    <h1>count is : {count}</h1>
    <h1>data is : {data}</h1>
    <h1>update count: {UpdateCount}</h1>
    <h1>update data: {UpdateData}</h1>
    <button onClick={()=>{setCount(count+1)}}>update count</button>
    <button onClick={()=>{setData(data*10)}}>update data</button>
    </div>
  )
}
export default UseMemo