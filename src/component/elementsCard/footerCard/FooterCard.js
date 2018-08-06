import React from 'react'
import './FooterCard.css'
import { FiMaximize, FiSearch} from 'react-icons/fi'

export default function FooterCard(props) {
    return (
        <div className='card-footer'>
            <div className='card-footer-icons'>
                <FiMaximize className='icon' />
                <FiSearch className='icon' />
            </div>
            <button className='card-footer-button'>Me escolha :)</button>
        </div>
    )
}