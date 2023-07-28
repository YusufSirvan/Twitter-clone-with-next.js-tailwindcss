import React from 'react'
import FollowCard from './FollowCard'


const Following = () => {
  return (
    <div className='mt-8  w-[350px]  bg-slate-100'>
      <div className='font-bold mb-4 m-2 text-xl'>
        <h1>Who to follow</h1>
      </div>

      <FollowCard/>
      <FollowCard/>
      <FollowCard/>
      <FollowCard/>



    </div>
  )
}

export default Following