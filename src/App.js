import React from 'react';
import Header from "./Header";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import NotFound from './Pages/NotFound';
function App() {
  return (
    <>
    <div className="App">
         <Header/>
     </div>
    <Routes>

   
    <Route path="/about" element={<About/>} />
     <Route path="/" element={<Home/>}/>
     <Route path="/profile" element={<Profile/>}>
            <Route path="galib" element={<h3>awe galib page</h3>}/>
      </Route>
     <Route path="*" element={<NotFound/>}/>
       
       
    </Routes>
     
    </>
  );
}

export default App;
