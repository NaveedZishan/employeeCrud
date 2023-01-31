import React, { useEffect, useState, createContext } from "react";
import NewApp from "./NewApp";
import {Routes,Route} from "react-router-dom"

import NewUpdation from "./NewUpdation"
import axios from "axios";
 export const EmppContext = createContext()
function NewMyRoutes() {
  const [showApi, setShowApi] = useState([])

 useEffect(() => {
    axios.get("http://localhost:3001/employees")
      .then((response) => setShowApi(response.data))
    // .then((response)=>console.log(response.data))
  },[])

  return (

    <EmppContext.Provider value={showApi}>
    <div>
    <Routes>
    <Route path="/" element={<NewApp  />}/>
    <Route path="/newupdation/:id" element={<NewUpdation />}/>
    </Routes>
    </div>
    </EmppContext.Provider>
  )}
export default NewMyRoutes