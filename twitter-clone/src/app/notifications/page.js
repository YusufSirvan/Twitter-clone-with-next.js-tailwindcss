import React from 'react'
import Left from '../componets/Left'
import Search from '../componets/Search'
import Right from '../componets/Right'
import NotificationNav from '../componets/NotificationNav'
import Notification from '../componets/Notification'

const page = () => {

  return (
    <div className="mx-[50px]">
      <div className=''>

      </div>

      <div className="flex">

        <div className="left w-1/5 ">
          <Left />
        </div>

        <div className="middle  w-[600px] ">
          <NotificationNav />
          <div className='my-36'>
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
          </div>







        </div>

        <div className="right w-[350px]  mx-8 ">
          <div className="w-full">
            <Search />
          </div>

          <Right />
        </div>


      </div>



    </div>
  )
}

export default page