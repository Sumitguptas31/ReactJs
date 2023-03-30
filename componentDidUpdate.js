import { Component,useState } from "react";
class ComponentUpdate extends Component{
    constructor(){
        super();
        console.log("constructor")
        this.state={
            count:0
        }
    }

    componentDidUpdate(preProps,preState,snapshot){
        console.log("component did update",preState)
        if(this.state.count<10)
        this.setState({count:this.state.count+1})
    // if(preState.count==this.setState.count){
    //     alert("both are same")
    // }
    }

    render(){
        console.log("render")
        return(
            <div>
                <h1>component did Update</h1>
                <h1>count:{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>click here</button>
            </div>
        )
    }
}
export default ComponentUpdate