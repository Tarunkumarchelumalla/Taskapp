import React from 'react'
import { GoTriangleDown } from 'react-icons/go';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import PlaceIcon from '@mui/icons-material/Place';
import { TextField } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import pic from "../pic.jpg";
import {docs } from "./PostData";
import {useState}from "react";
function Posts() {

  return (<>
   <div className='flex-col w-full cursor-pointer mx-5  sm:hidden mt-5'>
          <ul className='flex w-full justify-between'>
            <li className='text-md text-black'>
               posts(2568)
            </li>
            
 
           <div className="flex text-black bg-[#F1F3F5] px-5 py-2 rounded-md">
                <h5 className='px-2 '>Filter: All</h5>
                <GoTriangleDown/>
           </div>
          </ul>


        </div>
        <div className='flex'>
        <ul className='hidden sm:flex w-full justify-between mt-5 py-2'>
            <li className='text-sm text-black'>
               posts(2568)
            </li>
            <li className='text-sm text-black'>
              Article
            </li>
            <li className='text-sm text-black'>
             Event 
            </li>

            <li className='text-sm text-black'>
              Education
              </li>
            
        
             
                
            <li className='text-sm text-black'>
            <div className="flex text-black bg-[#F1F3F5] px-5 py-2 rounded-md">
                <h5 className='px-2 '>Write Post</h5>
                <GoTriangleDown/>
           </div>
            </li>
            <li className='text-sm text-black'>
            <div className="flex text-white bg-[#2F6CE5] px-5 py-2 rounded-md">
            <AiOutlineUsergroupAdd size={25}/>
                <h5 className='px-2 '>Join Group</h5>
              
           </div>
              </li>
     
     
       
          </ul>
        </div>
<hr ></hr>
    <div className='flex mt-2 py-2 shadow-sm sm:mx-20 '>

      <div>
       
        {docs.map((curr)=>(
    <div className='flex-col w-full '>
        <div className='flex h-[250px] bg-article w-full '>
   
        </div>
        <div className='mx-5'>
            {curr.Type}
        </div>
        <div className='flex w-full mx-5 justify-between'>
       
            <div>{curr.Header}</div>
            <div className='w-20  cursor-pointer'><BsThreeDots  size={25} /></div>
        </div>
        <p className=' mx-5 text-xs py-1'>{curr.sub}</p>
        <div className=' flex w-full justify-between py-2'>
        <div className='flex mx-5 h-[40px]  '>
           <img src={pic} className="object-fill -h-40-w-90  rounded-full ">
           </img>
            <div className='flex-col px-7 '>
            <p className='w-full'>
              {curr.name}
            </p>
            <p>
             {curr.views}
            </p>
            </div>
           </div>
            <div className="flex text-black bg-[#F1F3F5] px-5 rounded-md text py-2">
                <h5 className='px-2 '>Share</h5>
                <GoTriangleDown/>
           </div>
        </div>

    </div>
))}
    </div>
    <div className='hidden sm:flex flex-col  mx-20 '>
    <div className=' flex'>

    <PlaceIcon className="mt-5"/>  <div className='flex w-full'>
           
         <TextField  id="standard-basic"   label="Suart India" variant="standard" />
         <CreateOutlinedIcon className="mt-5"/>
       </div>
  
    
 
    </div>
  
    <p className='text-xs py-4'>Your location helps us in better fetchings</p>
 
    </div>
    </div>
    </>
  )
}

export default Posts