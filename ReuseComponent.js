import Students from "./Students"
function ReuseComponent(){
    let arr=[
          {name:"sumit",email:"sumit@gmail.com",phone:8474843},
          { name:"sandeep",email:"sandeep@gmail.com",phone:8474848},
          {name:"rohan",email:"rohan@gmail.com",phone:8474843},
          { name:"aakash",email:"aakash@gmail.com",phone:8474848},
          { name:"ankit",email:"ankit@gmail.com",phone:8474843},
          { name:"vishal",email:"vishal@gmail.com",phone:8474848},
          ]
    return(
        <div classname="App">
            <h1>Reuse Component</h1>
           {
            arr.map((data,i)=>{
                return <Students item={data}/>
                
            })
           }
        </div>
    )
}
export default ReuseComponent
//Students component has been used