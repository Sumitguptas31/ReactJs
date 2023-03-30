import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function UserData() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/alluser").then((result) => {
            result.json().then((res) => {
                setUserData(res)
            })
        })
    }, [])
    console.log(userData)
    return (
        <div>
            <h1>all users data</h1>
            <Table>
                <tbody>
                <tr>
                    <td>FirstName</td>
                    <td>LastName</td>
                    <td>Dob</td>
                    <td>phone</td>
                    <td>email</td>
                    <td>password</td>
                </tr>
                {
                    userData && userData.data?
                    userData.data.map((item,i) => 
                        <tr key={i}>
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <td>{item.Dob}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                        </tr>
                    )
                    :<tr><td>not found</td></tr>
                }
                </tbody>
            </Table>
        </div>
    )
}

export default UserData