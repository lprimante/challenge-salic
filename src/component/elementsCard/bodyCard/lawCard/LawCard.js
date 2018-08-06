import React from 'react'
import './LawCard.css'

export default function LawCard(props) { 
    return (
        <div className='card-law'>
            <span>{props.lei}</span>
        </div>
    )
 }