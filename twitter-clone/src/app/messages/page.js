import React from 'react'
import Left from '../componets/Left'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGear } from '@fortawesome/free-solid-svg-icons'

const page = () => {
    return (
        <div className="mx-[50px] ">


            <div className="flex">

                <div className="left w-1/5 ">
                    <Left />
                </div>

                <div className="middle my-2 w-[350px] ">
                    <div className='flex'>
                        <h1 className='font-bold'>Messages</h1>
                        <FontAwesomeIcon className='w-4 h-4 ml-36' icon={faGear} />
                        <FontAwesomeIcon className='w-4 h-4 ml-2' icon={faEnvelope} />
                    </div>
                    <div className='my-12 ml-2'>
                        <h1 className='font-black text-3xl'>Welcome to your inbox!</h1>
                        <p className='font-light '>Write your thoughts, Tweet and share more with others on the Twitter platform through private chats. </p>
                        <button className='w-36 h-12 my-12 text-center bg-blue-500  rounded-3xl border-solid font-bold text-white py-3 border-black '>Write a message</button>
                    </div>



                </div>

                <div className="right my-[137px] w-[400px]  mx-8 ">

                    <div className='my-12 ml-2'>
                        <h1 className='font-black text-3xl'>Select message </h1>
                        <p className='font-light '>Choose from existing chats, start a new chat or continue surfing.</p>
                        <button className='w-36 h-12 my-12 text-center bg-blue-500  rounded-3xl border-solid font-bold text-white py-3 border-black '>New message</button>
                    </div>
                </div>


            </div>



        </div>
    )
}

export default page