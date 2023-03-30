
import { useRef } from "react";
function UseRefHooks(){
    let inputRef= useRef()
    function getdata(){
        console.log(inputRef.current.value)
         inputRef.current.focus()
         inputRef.current.style.color="red"
         inputRef.current.style.backgroundColor="Aqua"
        // inputRef.current.style.display="none"
    }
    return (
        <div>
            <h1>use ref hooks</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={()=>{getdata()}}>Handle Input</button>
        </div>
    )
}
export default UseRefHooks