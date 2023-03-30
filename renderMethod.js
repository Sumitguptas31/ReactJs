import React from 'react'
class Myuser extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "anil@test.com"
        }
    }
    render() {
        console.warn("Render method", this.state.email)
        return (
            <div>
                <h1>User Component </h1>
                <h1>Email:{this.state.email}</h1>
                <button onClick={() => this.setState({ email: "sidhu@test.com" })}>Update Email</button>
            </div>
        )
    }
}

export default Myuser;