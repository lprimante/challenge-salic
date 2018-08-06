import React from 'react'
import './ValueCard.css'

export default function ValueCard(props) {
    return (
        <div className='card-value'>
            <div className='card-value-approved'>
                <p>Aprovado</p>
                <p>R$ {props.valorAprovado}</p>
            </div>
            <div className='card-value-captured'>
                <p>Captado</p>
                <p>R$ {props.valorCaptado}</p>
            </div>
        </div>
    )
}