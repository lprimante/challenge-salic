import React from 'react'
import HeaderCard from './headerCard/HeaderCard'
import BodyCard from './bodyCard/BodyCard'
import FooterCard from './footerCard/FooterCard'
import './ElementsCard.css'

export default function ElementsCard(props) {
    return (
        <section className='card'>
            <HeaderCard nome={props.nome} />
            <BodyCard 
                area={props.area}
                enquadramento={props.enquadramento}
                proponente={props.proponente}
                municipio={props.municipio}
                uf={props.uf}
                valorAprovado={props.valorAprovado}
                valorCaptado={props.valorCaptado}
                />
            <FooterCard />
        </section>
    )
}