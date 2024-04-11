import React from 'react'

export default function ServiceCard({ imageSrc, title }) {
    return (
        <div className='container-card px-1s'>
            <img src={imageSrc} alt={title} />
            <h6 className="service-title ">{title}</h6>
        </div>
    )
}
