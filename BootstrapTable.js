import Table from 'react-bootstrap/Table';
function StudentTable(){
    let Students=[
           {name:"sumit",email:"sumit@gmail.com",phone:8474843},
            { name:"sandeep",email:"sandeep@gmail.com",phone:8474848},
             {name:"sandeep",email:"sandeep@gmail.com",phone:8474843},
            { name:"vishal",email:"vishal@gmail.com",phone:8474848},
            { name:"vishal",email:"vishal@gmail.com",phone:8474843},
            { name:"vishal",email:"vishal@gmail.com",phone:8474848},
             ]
    return(
        <div>
            <h1>Students List:</h1>
            <Table border="2">
                <tbody>
                <tr>
                     <th>Name</th>
                    <th>Email</th>
                    <th>phone</th>
                </tr>
            {
                 Students.map((item)=>{
                   return item.phone==="8474843"? <tr key={4}>
                    <td>{item.name} </td>
                    <td>{item.email}</td>
                    <td> {item.phone}</td>
                   </tr>:null
                    
                })
            }
            </tbody>
            </Table>
        </div>
    )
}
export default StudentTable