import { Component,useState } from "react";

class ShouldUpdate extends Component{
    constructor(){
        super();
        console.log("consutructor")
        this.state={
            count:0
        }
    }
    shouldComponentUpdate(){
        console.log("should component update",this.state.count)
        if(this.state.count>5 && this.state.count<10)
        return true
    }
    render(){
        console.log("render")
        return(
            <div>
                <h1>component should update {this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>click me</button>
            </div>
        )
    }
}
export default ShouldUpdate