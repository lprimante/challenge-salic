import React from 'react'
import './HeaderCard.css'

export default function HeaderCard(props) {
    return (
        <div className='card-title'>
            <h2>{props.nome}</h2>
        </div>    
    )
}