//constructor in life cycle method
import { Component } from "react";
class Constructor extends Component{
    constructor(){
        super();
        console.log("constructor")
        this.state={
            name:"sumit"
        }
    }
    render(){
        console.log("render")
        this.setState({name:"sumit gupta"})
        return(
            <div>
                <h1>hi this is constructor {this.state.name}</h1>

            </div>
        )
    }
}
export default Constructor