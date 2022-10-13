import React from 'react'
import { useState } from 'react'
function Home() {
  const[grp,setGrp]=useState("Join Group")
  function handlegrp(){
    let result = grp.localeCompare("Join Group");
    console.log(result);
  result===0?setGrp("Leave Group"): setGrp("Join Group");
  }
  return (
    <div className='flex-col justify-around h-[300px] w-full sm:h-[400px]   bg-hero-pattern bg-center '>
        <div className=' h-[200px] '>
          <ul>
            <li className='float-right  w-[150px]  border-2 border-white border-r-2 mt-5 mx-9 text-sm text-white' onClick={handlegrp}>
                {grp}
            </li>
          </ul>
        </div>
        <div className='flex-col mx-5 h-[250px]'>
            <h2 className='text-xl text-white '>Computer Engineering</h2>
            <a className='text-sm text-white cursor-pointer'>142,765 Computer Engineers follow this</a>
        </div>
    </div>
  )
}

export default Home