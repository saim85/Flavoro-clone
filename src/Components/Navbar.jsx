import React from 'react'
import { useDispatch } from 'react-redux'
import {setSearch}  from  '../redux/slices/SearchSlice'

function Navbar() {

  const dispatch = useDispatch()
  return (
   <>
    <nav className='flex flex-col lg:flex-row justify-between py-4 mx-6 mb-10 '>
        {/* date secio */}
     <div>
      <h3 className='text-3xl font-bold text-gray-600'>
        {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1></h1>

      <h1 className='text-2xl font-bold mb-4 '>Falvoro Foods</h1>
     </div>

     {/* search section */}
     <div>
        <input 
        type="search" 
        name="search"
        placeholder='Serach here'
        onChange={ (e)=>   dispatch(setSearch(e.target.value))}
        autoComplete='off'
        className=' p-3 border border-gray-400 outline-none 
        rounded-lg text-sm  w-full lg:w-[25vw]'
       
        

     />
     </div>

    </nav>

   </>
  )
}

export default Navbar
