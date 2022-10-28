import React from 'react';
import Navbaar from './component/navbaar';
import Home from "./component/Home";
import Posts from "./component/Posts";
import { useState } from 'react';
import Login from './component/Login';
function App() {
  const[signup, setSignup]=useState(false);
  const handlelog=()=>setSignup(!signup);

  return (
    <>
  <Navbaar/>
  <Home handlelog={handlelog}/>
  <Posts/>
  <Login  handlelog={handlelog} signup={signup}/>
    </>
  );
}

export default App;
