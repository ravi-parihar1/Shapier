import React from 'react'

export default function Phase6BrandImg({imgSrc,title}) {
  return (
    <div>
        

        <div className='categories-img'>
            <img src={imgSrc} alt='no image to display' className='brand_images_size' />
            <h6 className='categories-title'>{title}</h6>
        </div>
    </div>
  )
}
