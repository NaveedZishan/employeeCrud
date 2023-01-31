import React,{useContext,UserContext}from 'react'
import {useParams} from "react-router-dom"
function Updation() {

  // const userName = useContext(UserContext);

  
const prams=useParams()
console.log(prams)
    return (
    <div>

<h1> Updation</h1>

    </div>
  )
}

export default Updation