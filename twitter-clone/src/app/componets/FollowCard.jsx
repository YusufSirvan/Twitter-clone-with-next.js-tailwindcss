import React from 'react'
import Image from 'next/image'


const FollowCard = () => {
    return (
        <div>
            <div className='flex hover:bg-slate-200 p-2'>


                <div>
                    <Image
                        className='rounded-full bg-black '
                        src="/favicon.ico"
                        width={50}
                        height={50}
                        alt="logo"

                    />
                </div>

                <div className='mx-2'>
                    <h3 className='font-bold'>pictures</h3>
                    <h3 className='font-light'>@pictures</h3>
                </div>
                <div className='absolute'>
                    <button className=' ml-44   bg-black px-2 py-2 text-white rounded-3xl'>Follow</button>

                </div>

            </div>

        </div>
    )
}

export default FollowCard