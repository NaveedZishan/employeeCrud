import React, { useEffect, useState, useContext, createContext } from "react";
// import { Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Updation from "./Updation";
// import Updation from "./Updation";
const UserContext = createContext()
function App() {
  const [showApi, setShowApi] = useState([])
  // const [updtr,setUpdtr]=useState([])
  const [upname, setUpname] = useState("")
  const [upSalary, setUpSalary] = useState([])

  // const[inpt,setInpt]=useState("")
  // 
  // useEffect(() => {
  //   fetch("http://localhost:3001/employees")
  //     .then((response) =>(response.json() ) )

  //     .then((data) => {

  //       // console.log(data);
  //       setShowApi(data)
  //     })

  // }, [])



  /////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    axios.get("http://localhost:3001/employees")
      .then((response) => setShowApi(response.data))
    // .then((response)=>console.log(response.data))
  }, [])




  ////////////////////////////////////////////////////////////////////////////
  // const Delete=(show)=>{
  //   const newList = showApi.filter((id) => id !==show);
  //       setShowApi(newList);
  // }
  const del = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3001/employees/${id}`)
  }


  const updt = (id) => {
    console.log(id);
  }

  const addition = () => {
    const data = {
      name: upname,
      salary: parseInt(upSalary)
    }
    console.log(data);
    axios.post(`http://localhost:3001/employees`, data)
      .then((response) => {
        console.log(response);
      })
      ;
  }

  // const updateName=(e)=>{
  // setUpname(e.target.value)
  // console.log(upname);
  // }

  console.log(upname)
  return (
    <div >
      <tr>
        <th> ID </th>
        <th> Name </th>
        <th> Salary </th>
      </tr>

      {
        showApi.map((show) => {
          return (<>
            <tr key={show.id}>
              <td>{show.id} </td>
              <td> {show.name}</td>
              <td>{show.salary} </td>
            </tr>
            <button onClick={() => { del(show.id) }}>Delete</button>

            <Link to={`/updation/${show.id}`}>
              <button >Update</button>
              {/* <h3> Update The data</h3> */}
            </Link>
          </>)
         
        })}

      <br /><br /><br /><br />
      <button onClick={addition}> ADD NEW DATA TO THE TABLE</button>
      <br /><br />
      <input type="text" placeholder="name" onChange={(e) => (setUpname(e.target.value))} /><br /><br /><br />
      <input type="number" placeholder="Salary" onChange={(e) => (setUpSalary(e.target.value))} />

    </div>
  );
}
export default App;
