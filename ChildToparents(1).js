
function ChildComponent(props){
    let name="sumit kumar gupta"
  return(
    <div>
        <h1>I am from child component</h1>
        <button onClick={()=>props.data(name)}>click here</button>
    </div>
  )
}
export default ChildComponent