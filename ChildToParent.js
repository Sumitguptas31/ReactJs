
import ChildComponent from "./ChildToparents(1)"
function ChildToParents(){
    function AlertData(name){
        alert(name)
    }
 return(
    <div>
      <h1>Child To Parents</h1>
      <ChildComponent data={AlertData}/>
    </div>
 )
}
export default ChildToParents