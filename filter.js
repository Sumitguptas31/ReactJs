import { useSearchParams, } from "react-router-dom"
import { BrowserRouter,Routes,Route } from "react-router-dom"
function Filter(){
    const [searchParams,setSearchParams]=useSearchParams();
    //getting data of query params
    const age=searchParams.get("age")
    const city=searchParams.get("city")
    const district= searchParams.get("district")
    const state=searchParams.get("state")

   return(
    <div>
      <h1>Filter in searchparams</h1>
      <h1>age is: {age}</h1>
      <h1>city is: {city}</h1>
      <h1>district is: {district}</h1>
      <h1>state is : {state}</h1>
      <button onClick={()=>{setSearchParams({age:50})}}>update age</button>
    </div>
   )
}
export default Filter