import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCheck, faCommentDots, faEnvelope, faHouse, faList, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import MyProfile from './MyProfile'


const Left = () => {
    return (
        <div className='fixed'>
            <div className='space-y-2 my-8  '>
                <div>
                    <Link href="/">
                        <Image
                            className='mx-8'
                            src="/favicon.ico"
                            width={45}
                            height={45}
                            alt="logo"


                        />
                    </Link>

                </div>
                <div className='w-fit  mx-8 hover:bg-slate-200 px-2 py-2 rounded-2xl'>
                    <div><FontAwesomeIcon icon={faHouse} className=' absolute w-6 h-6' /></div>
                    <Link className='  rounded-lg border-solid font-bold  border-black mx-10' href="/">Home</Link>
                </div>
                <div className='w-fit  mx-8 hover:bg-slate-200 px-2 py-2 rounded-2xl'>
                    <div><FontAwesomeIcon icon={faMagnifyingGlass} className=' absolute w-6 h-6' /></div>
                    <Link className='  rounded-lg border-solid font-bold  border-black mx-10' href="/explore">Explore</Link>
                </div>
                <div className='w-fit  mx-8 hover:bg-slate-200 px-2 py-2 rounded-2xl'>
                    <div><FontAwesomeIcon icon={faBell} className=' absolute w-6 h-6' /></div>
                    <Link className='  rounded-lg border-solid font-bold  border-black mx-10' href="/notifications">Notifications</Link>
                </div>
                <div className='w-fit  mx-8 hover:bg-slate-200 px-2 py-2 rounded-2xl'>
                    <div><FontAwesomeIcon icon={faEnvelope} className=' absolute w-6 h-6' /></div>
                    <Link className='  rounded-lg border-solid font-bold  border-black mx-10' href="/messages">Messages</Link>
                </div>
                <div className='w-fit  mx-8 hover:bg-slate-200 px-2 py-2 rounded-2xl'>
                    <div><FontAwesomeIcon icon={faList} className=' absolute w-6 h-6' /></div>
                    <div className='  rounded-lg border-solid font-bold  border-black mx-10' href="/lists">Lists</div>
                </div>
                <div className='w-fit  mx-8 hover:bg-slate-200 px-2 py-2 rounded-2xl'>
                    <div><FontAwesomeIcon icon={faCheck} className=' absolute w-6 h-6' /></div>
                    <div className='  rounded-lg border-solid font-bold  border-black mx-10' href="/">Verified</div>
                </div>
                <div className='w-fit  mx-8 hover:bg-slate-200 px-2 py-2 rounded-2xl'>
                    <div><FontAwesomeIcon icon={faUser} className=' absolute w-6 h-6' /></div>
                    <div className='  rounded-lg border-solid font-bold  border-black mx-10' href="/profile">Profile</div>
                </div>
                <div className='w-fit  mx-8 hover:bg-slate-200 px-2 py-2 rounded-2xl'>
                    <div><FontAwesomeIcon icon={faCommentDots} className=' absolute w-6 h-6' /></div>
                    <div className='  rounded-lg border-solid font-bold  border-black mx-10' href="/">More</div>
                </div>
                <div className='w-fit mx-8 bg-blue-500 px-2 py-2 rounded-2xl'>
                    <Link className='  rounded-lg border-solid font-bold text-white  border-black mx-10' href="/">Tweet</Link>
                </div>


            </div>
            <MyProfile />
        </div>

    )
}

export default Left