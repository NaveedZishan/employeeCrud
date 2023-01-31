import React from 'react'
import {Routes,Route} from "react-router-dom"
import App from './App'
import Updation from './Updation'



function MyRoutes() {

  return (
    <div>
    <Routes>

    <Route path="/" element={<App/>}/>

    <Route path="/updation/:id" element={<Updation />}/>

    </Routes>
    </div>
  )
}

export default MyRoutes