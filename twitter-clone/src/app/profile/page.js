import React from 'react'
import Left from '../componets/Left'
import Middle from '../componets/Middle'
import Search from '../componets/Search'
import Right from '../componets/Right'
import Following from '../componets/Following'

const page = () => {
    return (
        <div className="mx-[50px]">
            
            

            <div className="flex">

                <div className="left w-1/5 ">
                    <Left />
                </div>

                <div className="middle w-[600px] ">
                    <div>navbar</div>
                    <div className='h-48'>
                        profile
                    </div>
                    <Middle />
                </div>

                <div className="right w-[350px]  mx-8 ">
                    <div className="w-full">
                        <Search />

                    </div>
                    <div className='mt-20'>
                        <Following />

                    </div>




                    <Right />
                </div>


            </div>



        </div>
    )
}

export default page