import React from 'react'
import './TypeCard.css'

export default function TypeCard(props) {
    return (
        <div className='card-type'>
            <p className='card-type-area'>{props.area}</p>
            <p className='card-type-framework'>{props.enquadramento}</p>
        </div>
    )
}