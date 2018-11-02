import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Loading from '../Loading/index'
import api from '../../services/api'

import './styles.css'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            titulos: []
        }
    }

    componentDidMount() {
        this.loadTitulos()
    }

    loadTitulos = async () => {
        const response = await api.get(`/titulos`)

        this.setState({ titulos: response.data.docs })
    }

    renderTela = (titulos) => (
        <div className="titulo-list">
            {titulos.map(titulo => (
                <article className="card" key={titulo._id}>
                    <img src={titulo.imageUrl} alt="" />
                    <section>
                        <strong>{titulo.name}</strong>
                        <p>{titulo.desc}</p>
                        <Link to={`/titulos/${titulo._id}`}>Acessar</Link>
                    </section>
                </article>
            ))}
        </div>
    )

    render() {
        const { titulos } = this.state

        return (
            (titulos[0] && this.renderTela(titulos))
            || <Loading />
        )
    }
}