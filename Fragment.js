import Coloum from "./coloum"
function Fragment(){
  return(<div>
    <h1>This is Fragment</h1>
    <table border={1}>
        <tbody>
            <tr>
             <Coloum/>
            </tr>
        </tbody>
    </table>
  </div>)
}
export default Fragment