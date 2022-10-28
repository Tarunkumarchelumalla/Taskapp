import React, { useState } from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { TiDeleteOutline } from 'react-icons/ti';


function Login({handlelog,signup}) {

  return (
    <><div className={ signup?'sm:hidden fixed top-30 bottom-0 h-[430px] w-full bg-white rounded-xl':"hidden"}>
        <div className='w-full h-full flex-col'>
            <div className='flex w-full justify-between  mt-2 py-4'>
                <p className='flex mx-2'>Create Account</p>
                <p className='flex mx-2 cursor-pointer' onClick={handlelog}><TiDeleteOutline size={25}/></p>
            </div>
            <div className='flex-col h-[210px] rounded bg-[#CED4DA] mx-2'>
                <div className='flex h-[50px] w-full justify-between bg-[#CED4DA]'>
                    <input placeholder='FirstName ' className='bg-[#CED4DA]  font-[12px]'></input>
                    <input placeholder='LastName' className='bg-[#CED4DA]  font-[12px]'></input>
                    
                </div>
                <hr></hr>
                <input placeholder='Email ' className='bg-[#CED4DA] font-[12px] h-[50px] w-full'></input>
                <hr></hr>

                <input placeholder='password ' className='bg-[#CED4DA]  font-[12px] h-[50px] w-full'></input>
                <hr></hr>
                <input placeholder='Confirm password ' className='bg-[#CED4DA]  font-[12px]  h-[50px] w-full'></input>
                
                <div className='flex w-full  justify-between mt-6'>
                    <a className='mx-2 p-3 rounded-3xl bg-[#2F6CE5] text-white'>Create Account</a>
                    <a className='mx-2 mt-3 '>or signin</a>
                </div>
                <a className='mx-2  text-black flex justify-center w-full border-[1px] border-[#ADB5BDw] h-[30px] mt-2' ><span className='px-2'><FaFacebook className='mt-1' size={25} color="#3b5998"/></span>signup with facebook</a>
                <a className='mx-2  text-black flex justify-center w-full border-[1px]  border-[#ADB5BDw] h-[30px] mt-2' > <span className='px-2'> <FcGoogle size={25}/></span>signup with Google</a>
            </div>
        </div>
      </div></>
  )
}

export default Login