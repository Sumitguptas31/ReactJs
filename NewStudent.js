import { Component } from "react";

class NewStudent extends Component{
    componentWillUnmount(){
        alert("component is removed")
    }
    render(){
        return(
            <div><h1>Student component is here</h1></div>
        )
    }
}
export default NewStudent