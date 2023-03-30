//created table 
function StudentList(){
    let Students=[
           {name:"sumit",email:"sumit@gmail.com",phone:8474848},
            { name:"sandeep",email:"sandeep@gmail.com",phone:8474848},
             {name:"sandeep",email:"sandeep@gmail.com",phone:8474848},
            { name:"vishal",email:"vishal@gmail.com",phone:8474848}
             ]
    return(
        <div>
            <h1>Students List:</h1>
            <table>
                <tr>
                     <th>Name</th>
                    <th>Email</th>
                    <th>phone</th>
                </tr>
            {
                 Students.map((item)=>{
                   return <tr>
                    <td>{item.name} </td>
                    <td>{item.email}</td>
                    <td> {item.phone}</td>
                   </tr>
                    
                })
            }
            </table>
        </div>
    )
}
export default StudentList