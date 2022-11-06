import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Card = ({data}) => {
  return (
    <div className='text-white max-w-[calc((100vw_-_120px)/3)] md:max-w-[calc((100vw_-_160px)/4)] lg:max-w-[calc((100vw_-_230px)/6)]'>
        <LazyLoadImage 
          src={`public/images/${data?.['poster-image']}`}
          effect="blur" 
          alt="poster" 
          className="w-[calc((100vw_-_120px)/3)]"   
          onError={event => {
            event.target.src ='public/images/placeholder_for_missing_posters.png'
            event.onerror = null
          }}
          />
        <p className="text-sm mt-[4px] h-[38px] text-gray-400 overflow-auto">{data?.name}</p>
    </div>
  )
}

export default Card