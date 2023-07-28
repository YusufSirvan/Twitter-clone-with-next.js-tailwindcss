import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className='fixed my-2 '>
      <div className=' '>
        <div className='absolute w-4 h-4 my-2 mx-2' >
          <FontAwesomeIcon icon={faMagnifyingGlass} className='color-[#EFF3F4] border-solid rounded-l-lg' />
        </div>

        <input className=' w-80 h-9 bg-[#EFF3F4] text-center rounded-xl outline-1 outline-[#1A8CD8] ' type="search" name="searchBar" id="sB" placeholder='Search Twitter' />


      </div>
    </div>
  )
}

export default Search