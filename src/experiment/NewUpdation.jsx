import React,{useContext,useEffect,UserContext, useState}from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios';
// import NewMyRoutes from './NewMyroute';
import { EmppContext } from './NewMyroute';
function NewUpdation() {
// const [updateData,setUpdateData]=useState([])
const [nname,setNname]=useState("")

const [nsalary,setNsalary]=useState("")
  // const userName = useContext(UserContext);
const showApi = useContext(EmppContext);
  // console.log("newUpdation.............",showApi);


   useEffect(()=>{
nameHandler()

  },[])

const params=useParams()
//  const ID =prams.id
// console.log(prams);
 const newList = showApi.filter((showw) => showw.id === parseInt(params.id));


console.log(newList);

const nameHandler=()=>{
setNname(newList[0].name)
setNsalary(newList[0].salary)
}

// const handleChange=(e)=>{
// setNname(newList[0].name=e.target.value)

// }
const dataShow=()=>{
console.log({ name:nname, salary:nsalary});
const ddata={
name:nname,
salary:nsalary
}


axios.put(`http://localhost:3001/employees/${params.id}`, ddata)
.then((response) => {
  console.log(response);
})



// console.log(nname);

}






// console.log(nname);


// const salaryHandler=(e)=>{
//   setNname(newList)
//   console.log(nname);
//   }

    return (
    <div>
<h1> Updation</h1>
{/* <button onClick={nameHandler}> click for  Name</button> */}

{/* <h1>{nname}</h1> */}

{/* <h1> {nsalary}</h1> */}
<input type="text" value={nname} onChange={(e)=>setNname(e.target.value)} /> <br /><br />

<input type="number" value={nsalary}   onChange={(e)=>setNsalary(e.target.value)} /><br /><br />

<button onClick={dataShow}> Change The Data</button>

    </div>
  )}

export default NewUpdation