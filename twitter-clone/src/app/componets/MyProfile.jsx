import React from 'react'
import Image from 'next/image'


const MyProfile = () => {
    return (
        <div className='w-60 my-16 '>
            <div className='flex rounded-full hover:bg-slate-200 p-2'>


                <div>
                    <Image
                        className='rounded-full bg-black '
                        src="/favicon.ico"
                        width={35}
                        height={35}
                        alt="logo"

                    />
                </div>

                <div className='mx-2'>
                    <h3 className='font-bold'>Account name</h3>
                    <h3 className='font-light'>@userName</h3>
                </div>
                <div className='absolute'>

                </div>

            </div>

        </div>
    )
}

export default MyProfile