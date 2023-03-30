import { useState,useRef } from "react";
function UncontrolledComponent(){
    let InputRef=useRef(null)
    let InputRef2= useRef(null)
    function SubmitData(e){
       e.preventDefault() 
       console.log("Input field 1:",InputRef.current.value)
       console.log("Input field 2:",InputRef2.current.value)
    }
    return(
        <div>
            <h1>uncontrolled componnet</h1>
            <form onSubmit={SubmitData}>
                <input type="text" ref={InputRef} /><br/><br/>
                <input type="text" ref={InputRef2} /> <br/><br/>
                <button type="submit">click me</button>
            </form>
        </div>
    )
}
export default UncontrolledComponent