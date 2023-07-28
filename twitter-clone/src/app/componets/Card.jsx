import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMessage, faRetweet, faUpload } from '@fortawesome/free-solid-svg-icons'


const Card = () => {
  return (
    <div className='border-solid border  '>

        <div className='flex my-2'>
            <Image
                className='rounded-full bg-black '
                src="/favicon.ico"
                width={35}
                height={35}
                alt="logo"
            
            />
            <h5 className='mx-4'>Acoount Name @userName <span className='ml-[290px]'>...</span></h5>
        </div>
        <div>
            <p className='mx-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus amet debitis sint, aliquam eius perferendis!</p>
        </div>
        <div className='my-2 '>
            <Image
                className='rounded bg-black mx-[100px] '
                src="/favicon.ico"
                width={400}
                height={150}
                alt="logo"
            
            />
        </div>
        <div className=' flex space-x-[15px] mb-4 my-4 mx-24'>
            <FontAwesomeIcon className='h-4  w-8 ' icon={faMessage} />
            <h6>269</h6>
            <FontAwesomeIcon className='h-4  w-8 ' icon={faRetweet} />
            <h6>269</h6>
            <FontAwesomeIcon className='h-4  w-8 ' icon={faHeart} />
            <h6>269</h6>
            <FontAwesomeIcon className='h-4  w-8 ' icon={faUpload} />




        </div>



    </div>
  )
}

export default Card