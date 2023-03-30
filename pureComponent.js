import {Component, PureComponent } from "react";

class MyComponent extends PureComponent{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render(){
        console.log("re-rendering")
        return(
            <div>
            <h1>hi This is pure Component {this.state.count}</h1>
            <button onClick={()=>this.setState({count:1})}>update data</button>
            </div>
        )
    }
}
export default MyComponent