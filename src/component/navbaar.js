import React, { useState } from 'react'
import { BsFillTriangleFill} from 'react-icons/bs';
import { BsFillSquareFill } from 'react-icons/bs';
import { BsFillCircleFill } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
import {GoTriangleDown} from 'react-icons/go';

function Navbaar() {
  const [menu, setMenu]=useState(false);
  return (<>
    <div className=' flex-col w-full h-[22px] border-[1px] mt-1 shadow-sm sm:hidden  '>
     
            <ul className='flex   float-right sm:hidden  mx-5'>
                <li className='px-1 flaot-right cursor-pointer'>
                            <BsFillCircleFill size={13}/>
                </li>
                <li className='px-1 flaot-right cursor-pointer'>
                <BsFillSquareFill size={13}/>
                </li>
                <li className='px-1 flaot-right cursor-pointer '>
                <BsFillTriangleFill size={13} />
                </li>
            </ul>

            </div>
                <div className='hidden sm:flex w-full  h-[60px] justify-between mt-2 py-3  '>
                        <div className=''>
                                      LOGO  
                        </div>
                        <div className='flex min-w-[200px] bg-[#CED4DA] rounded-lg'>
                          <a className='px-2 py-2'><FcSearch size={25}/></a><input className="bg-[#CED4DA] rounded-lg min-w-[200px]" type="text" placeholder='Search what you want '></input>
                    </div>
                    <div className='flex mx-5'>
                        Create Accoutn<a className='text-[#4C6FF5]'>.its Free</a><GoTriangleDown/>
                      </div>
             
    
                </div>
             

                </>
  
  )
}

export default Navbaar