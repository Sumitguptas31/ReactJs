//state with class component
import { Component } from "react";

class NewState extends Component{
    constructor(){
        super();
        this.state={
            data:"sumit",
            data2:0
        }
    }
   apple(){
    this.setState({data:"amit"})
    this.setState({data2:this.state.data2+1})
   }
    render(){
        return(
            <div>
               <h1>{this.state.data}</h1>
               <h1>{this.state.data2}</h1>
               <button onClick={()=>{this.apple()}}>click me</button>
            </div>
        )
    }
}
export default NewState