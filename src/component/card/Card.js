import React, { Component } from 'react'
import getData from '../../api/config'
import ElementsCard from '../elementsCard/ElementsCard'
import Loading from '../../img/loading.gif'
import './Card.css'

const salic = getData('http://api.salic.cultura.gov.br/v1/projetos/?limit=99&offset=0&Accept=text/html')

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true,
        }
    }

    componentDidMount () {
        salic.then(response => {
            let responseJson = JSON.parse( response )
            this.setState({ data: responseJson._embedded.projetos,
                            loading: false, })
            console.log(this.state.data)
        }).catch(erro => {
            alert(erro)
})
    }

    render() {
        return (
            <div className='cards-row'>
                {this.state.data.length < 1 ? <img src={Loading} /> : this.state.data.map(d => 
                        <ElementsCard key={d.PRONAC}
                            nome = {d.nome}
                            enquadramento = {d.enquadramento}
                            area = {d.area}
                            proponente = {d.proponente}
                            municipio = {d.municipio} 
                            uf = {d.UF}
                            valorAprovado = {d.valor_aprovado}
                            valorCaptado = {d.valor_captado}
                        />)}    
            </div>
        )
    }
  }