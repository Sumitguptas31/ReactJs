import { useState } from "react"

function HighestOrderComponent(){
 
  return(
    <div>
        <h1>Highest order component</h1>
        <Hoc cmp={Counter}/>
        <HocGreen cmp={Counter}/>
        <HocBlue cmp={Counter}/>
    </div>
  )

  function Hoc(props){
    return(
        <div>
            <h1 style={{backgroundColor:"red",width:300}}><props.cmp/></h1>
        </div> 
    )
  }
  function HocGreen(props){
    return(
        <div>
            <h1 style={{backgroundColor:"Green",width:300}}><props.cmp/></h1>
        </div> 
    )
  }
  function HocBlue(props){
    return(
        <div>
            <h1 style={{backgroundColor:"blue",width:300}}><props.cmp/></h1>
        </div> 
    )
  }

function Counter(){
    const [count,setCount]=useState(0)
    return(
         <div>
        <h1>This is counter function</h1>
        <h1> count is: {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>click here</button>
        </div>
    )
}



}
export default HighestOrderComponent