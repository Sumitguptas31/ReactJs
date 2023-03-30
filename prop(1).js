//Props in class component
import { Component } from "react";

export default class NewProps extends Component{
    render(){
        return(
            <div style={{backgroundColor:"skyblue"}}>
                <h1>name: {this.props.name}</h1>
                <h2>email: {this.props.email}</h2>
                <h4>address: {this.props.address}</h4>
            </div>
        )
    }
}