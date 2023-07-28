import React from 'react'
import Left from '../componets/Left'
import Search from '../componets/Search'
import Right from '../componets/Right'

const page = () => {
    return (
        <div className="mx-[50px]">
            

            <div className="flex">

                <div className="left w-1/5 ">
                    <Left/>
                </div>

                <div className="middle  w-[600px] ">
                    navbar
                </div>

                <div className="right w-[350px]  mx-8 ">
                    <div className="w-full">
                        <Search/>
                    </div>

                    <Right/>
                </div>


            </div>



        </div>
    )
}

export default page