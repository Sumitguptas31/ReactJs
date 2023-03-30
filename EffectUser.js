import { useState,useEffect } from "react";

function EffectUser(props){
    useEffect(()=>{
       alert("data useEffect is working"+props.data)
    },[props.data])
    useEffect(()=>{
        alert("count useEffect is working"+props.count)
    },[props.count])
    return(
        <div>
            <h1>Data:{props.data}</h1>
            <h1>Count:{props.count}</h1>
           
        </div>
    )
}
export default EffectUser

//props is coming from EffectUser(1)