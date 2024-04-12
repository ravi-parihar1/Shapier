import React from 'react'

export default function Phase3BrandImage({imgSrc}) {
  return (
    <div>
      <div className='container-brand-img'>
            <img src={imgSrc} alt='no image to display' className='brand_images_size' />
        </div>
    </div>
  )
}
