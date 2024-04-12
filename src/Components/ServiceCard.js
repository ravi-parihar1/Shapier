import React from 'react'

export default function ServiceCard({ imageSrc, title }) {
    return (
        <div className='container-card'>
            <img src={imageSrc} alt={title} />
            <h6 className="service-title ">{title}</h6>
        </div>
    )
}
