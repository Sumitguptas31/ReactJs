import './app.css';
import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
function GetApp() {
    const [users, setUser] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/books").then((result) => {
            result.json().then((resp) => {
                // console.warn(resp)
                setUser(resp)
            })
        })
    }, [])
    console.warn(users)
    return (
        <div className="App">
            <h1>Get API Call </h1>
            <Table border="1">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>title</td>
                        <td>excerpt</td>
                        <td>category</td>
                    </tr>
                    {
                        users && users.data ?
                            users.data.map((item, i) =>
                                <tr key={i}>
                                    <td>{item._id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.excerpt}</td>
                                    <td>{item.category}</td>
                                </tr>
                            )
                            : <tr><td>not found</td></tr>

                    }
                </tbody>
            </Table>
        </div>
    );
}
export default GetApp;