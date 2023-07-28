import React from 'react'
import Left from '../componets/Left'
import Middle from '../componets/Middle'
import Search from '../componets/Search'
import Following from '../componets/Following'
import Right from '../componets/Right'


const page = () => {
  return (
    <div className="mx-[50px]">
      <div className='middle ml-96 w-[600px] '>
          <Search/>
      
      </div>

      <div className="flex">

        <div className="left w-1/5 ">
          <Left/>
        </div>

        <div className="middle  w-[600px] ">
          <div className='w-full'>
            <Right/>
          </div>
          <Middle/>
        </div>

        <div className="right w-1/5 h-96 mx-8 fixed ml-[900px] ">
          <Following/>
        </div>

      </div>

    </div>
  )
}

export default page