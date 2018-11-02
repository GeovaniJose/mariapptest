import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NProgress from 'nprogress'

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
    NProgress.start()
    this.loadTitulos()
  }

  loadTitulos = async () => {
    try {
      const response = await api.get(`/titulos`)

      this.setState({ titulos: response.data.docs })

      document.querySelector('#nprogress .bar').style.backgroundColor = "#00b46b";
      NProgress.done()
    } catch (err) {
      console.log(err)

      document.querySelector('#nprogress .bar').style.backgroundColor = "#f00";
      NProgress.done()
    }
  }

  render() {
    const { titulos } = this.state

    return (
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
  }
}