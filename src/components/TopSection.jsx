import React from 'react'
const TopSection = () => {
  return (
    <div className="h-[100px] text-white flex justify-between items-center mb-[36px] sticky top-0 overflow-hidden" >
        <div className="left flex gap-[10px] items-center">
            <img src={'public/images/Back.png'} alt="back button" className='w-[20px] h-[20px]' />
            <h4 className="text-xl">Romantic Comedy</h4>
        </div>
        <img src={'public/images/search.png'} alt="search icon" className='w-[30px] h-[30px]' />
    </div>
  )
}

export default TopSection