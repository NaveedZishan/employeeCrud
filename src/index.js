import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import MyRoutes from './MyRoutes';
import NewMyroute from './experiment/NewMyroute';
// import Updation from './Updation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       {/* <App /> */}
       {/* <MyRoutes/> */}
       <NewMyroute/>
       
    </BrowserRouter>
  </React.StrictMode>
);


