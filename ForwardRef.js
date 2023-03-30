import { useRef } from "react"
import NewRef from "./ForwardRef(1)"
function ForwardRef(){
    let myRef= useRef(null)
    function InputData(){
         myRef.current.value="1000000"
         myRef.current.focus()
         myRef.current.style.color="white"
         myRef.current.style.backgroundColor="black"
    }
  return(
    <div>
        <h1>forward ref</h1>
        <NewRef ref={myRef}/>
        <button onClick={()=>{InputData()}}>InputField</button>
    </div>
  )
}
export default ForwardRef