import "./app.css"
import style from"./custom.module.css"
function Style(){
    return(
        <div>
          <h1 className="primary">This is Style of react</h1><br/><br/>
          <h1 style={{backgroundColor:"azure",color:"red"}}>This is Style of react2</h1><br/><br/>
          <h1 className={style.success}>This is Style of react3</h1><br/><br/>
        </div>
    )
}
export default Style