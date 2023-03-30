import React from "react";
import { createRef } from "react";
class RefPractice extends React.Component{
    constructor(){
        super();
      this.Myref=createRef()
    }
    componentDidMount(){
        console.log(this.Myref.current.value="10")
    }
      getdata(){
        console.log(this.Myref.current.value)
        this.Myref.current.style.color="white"
        this.Myref.current.style.backgroundColor="black"
    }
    
    render(){
        return(
            <div>
                <h1>ref in class component</h1>
                <input type="text" ref={this.Myref}/>
                <button onClick={()=>{this.getdata()}}>click here</button>
            </div>
        )
    }
}
export default RefPractice