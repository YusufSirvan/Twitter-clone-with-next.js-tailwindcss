import React from 'react'

const NotificationNav = () => {
  return (
    
    <div className='flex  fixed  bg-white/75'>

      <div className=' font-bold w-[600px] border '>
        <h1 className='mb-8 my-4 mx-2'>Notifications</h1>
        <div className='flex  '>
          <button className='w-1/2  h-16  hover:bg-slate-200  focus:outline-[#EFF3F4] focus:ring focus:ring-[#EFF3F4]'><h2>All</h2></button>
          <button className='w-1/2  h-16  hover:bg-slate-200  focus:outline-[#EFF3F4] focus:ring focus:ring-[#EFF3F4]'><h2>Verified</h2></button>
          <button className='w-1/2  h-16  hover:bg-slate-200  focus:outline-[#EFF3F4] focus:ring focus:ring-[#EFF3F4]'><h2>Mentions</h2></button>

        </div>
      </div>





    </div>
  
  )
}

export default NotificationNav