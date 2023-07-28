import React from 'react'
import Image from 'next/image'


const Notification = () => {
    return (
        <div className=' border w-[600px]'>

            <div className='mx-4 p-2'>
                <Image
                    className='rounded-full bg-black '
                    src="/favicon.ico"
                    width={35}
                    height={35}
                    alt="logo"

                />
                <div><h3 className='font-bold'>userName</h3></div>
                <div><p className='font-light font-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p></div>
            </div>




        </div>
    )
}

export default Notification