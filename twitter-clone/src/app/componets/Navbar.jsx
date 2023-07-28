import React from 'react'




const Navbar = () => {
    return (
        <div className='flex mx-16 fixed mx-[244px] bg-white/75'>

            <div className=' font-bold w-[600px] border '>
                <h1 className='mb-8 my-4 mx-2'>Home</h1>
                <div className='flex  '>
                    <button className='w-1/2  h-16  hover:bg-slate-200  focus:outline-[#EFF3F4] focus:ring focus:ring-[#EFF3F4]'><h2>For you</h2></button>
                    <button className='w-1/2  h-16  hover:bg-slate-200  focus:outline-[#EFF3F4] focus:ring focus:ring-[#EFF3F4]'><h2>Following</h2></button>
                </div>
            </div>





        </div>
    )
}

export default Navbar