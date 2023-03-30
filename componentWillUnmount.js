import { Component, useState } from "react";
import NewStudent from "./NewStudent";
class ComponentUnmount extends Component{

    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
        return(
            <div>
                {
                  this.state.show?<NewStudent/>:<h1>component is removed</h1>
                }
                <button onClick={()=>this.setState({show:!this.state.show})}>click here</button>
            </div>
        )
    }
}
export default ComponentUnmount