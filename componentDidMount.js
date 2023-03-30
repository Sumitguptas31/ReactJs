import { Component } from "react";

class ComponentMount extends  Component{

    constructor(){
        super();
        console.log("constructor is calling")
        this.state={
            email:"sumit@gmail.com"
        }
    }
    componentDidMount(){
        console.log("component did mount is calling")
    }
    render(){
        console.log("render is calling")
        return(
            <div>
                <h1>component did mount</h1>
                <h1>email:{this.state.email}</h1>
                <button onClick={()=>this.setState({email:"amit@gmail.com"})}>click me</button>
            </div>
        )
    }
}
export default ComponentMount