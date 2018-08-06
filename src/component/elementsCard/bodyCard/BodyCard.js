import React from 'react'
import TypeCard from './typeCard/TypeCard'
import ProponentCard from './proponentCard/ProponentCard'
import LawCard from './lawCard/LawCard'
import ValueCard from './valueCard/ValueCard'
import ContributedCard from './contributedCard/ContributedCard'
import './BodyCard.css'

export default function BodyCard(props){
    return (
        <div className='card-body'>
            <TypeCard 
                area={props.area} 
                enquadramento={props.enquadramento} 
                />
            <div className='card-body-row'>
                <ProponentCard 
                    proponente={props.proponente}municipio={props.municipio} uf={props.uf} 
                    />
                <LawCard 
                    lei={'Rouanet'} 
                    />
            </div>
            <ValueCard 
                valorAprovado={props.valorAprovado} 
                valorCaptado={props.valorCaptado} />
            <ContributedCard />
        </div>
    )
}
