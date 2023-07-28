import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faFaceSmile, faImage, faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Sharing = () => {
  return (
    <div className='border-solid border'>

        <div className='flex'>
        <Image
                className='rounded-full bg-black '
                src="/favicon.ico"
                width={35}
                height={35}
                alt="logo"
            
            />
           <input  className='mx-4 ' type="text" name="text" id="text" placeholder='What´s happening?'/>

        </div>
        <div className='flex'>
          <div className=' flex space-x-4 mb-4 my-4 mx-12'>
          <FontAwesomeIcon className='h-4  w-8 ' icon={faImage} />
          <FontAwesomeIcon className='h-4  w-8 ' icon={faFaceSmile} />
          <FontAwesomeIcon className='h-4  w-8 ' icon={faCalendarDays} />
          <FontAwesomeIcon className='h-4  w-8 ' icon={faLocationDot} />
        </div>
        <button className='w-fit mx-60 mb-2  bg-blue-500 px-2 py-2 text-white rounded-3xl'>Tweet</button>

        </div>
        


    </div>
  )
}

export default Sharing