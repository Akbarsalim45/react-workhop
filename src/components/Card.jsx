import React from 'react'
const Card = ({data}) => {
  return (
    <div className='text-white'>
        <img src={`public/images/${data?.['poster-image']}`} alt="poster" className="w-[calc((100vw_-_120px)/3)]"  />
        <p className="text-sm mt-[4px] text-gray-400">{data?.name}</p>
    </div>
  )
}

export default Card