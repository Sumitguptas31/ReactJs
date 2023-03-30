
function MyProps(props){
    return(
        <div style={{backgroundColor:"blue"}}>
            <h1>hi {props.name}</h1>
            <h2>email: {props.email}</h2>    
        </div>
    )
}
export default MyProps