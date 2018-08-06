import React from 'react'
import './ProponentCard.css'

export default function ProponentCard(props) {
    return (
        <div className='card-proponent'>
            <p className='card-proponent-name'>{props.proponente}</p>
            <p className='card-proponent-city'>{props.municipio} - {props.uf}</p>
        </div>
    )
}