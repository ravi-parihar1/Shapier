import React from 'react'

export default function Phase3BrandImage({imgSrc}) {
  return (
    <div>
      <div className='container-brand-img'>
            <img src={imgSrc} alt='no image to display' style={{height: "150px" , width: "150px"}} />
        </div>
    </div>
  )
}
