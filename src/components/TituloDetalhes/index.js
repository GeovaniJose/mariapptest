import React, { Component } from 'react'
import NProgress from 'nprogress'

import api from '../../services/api'

import './styles.css'

export default class TituloDetalhe extends Component {
  constructor() {
    super()

    this.state = {
      titulo: {},
      historia: []
    }
  }

  async componentDidMount() {
    NProgress.start()
    this.loadTitulo()
  }

  loadTitulo = async () => {
    try {
      const { id } = this.props.match.params;

      const response = await api.get(`/titulos/${id}`)

      this.setState({ titulo: response.data, historia: response.data.history })

      document.querySelector('#nprogress .bar').style.backgroundColor = "#00b46b";
    } catch (err) {
      console.log(err)

      document.querySelector('#nprogress .bar').style.backgroundColor = "#f00";
    } finally {
      NProgress.done()
    }
  }

  loadDetalhe = () => {
    const { titulo } = this.state
    return (
      <div className="detalhe-container">
        <div className="detalhe-header" style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), transparent), url('
            + titulo.imageUrl + ') center -30px no-repeat',
          backgroundSize: 'cover'
        }}>
          <h1 className="detalhe-header__title">{titulo.name}</h1>
          <h2 className="detalhe-header__sub">{titulo.day}</h2>
        </div>
      </div>
    )
  }

  render() {
    const { titulo } = this.state

    return (
      (titulo.name && this.loadDetalhe())
      || <div></div>
    )
  }
}

/*
<div className="titulo-info">
        <h1>{titulo.name}</h1>
        <img className="titulo-info__imagem" src={titulo.imageUrl} alt=''></img>
        <p>{titulo.desc}</p>
        <p>{
          titulo.history &&
          titulo.history.map(hist => hist)
        }</p>
        <span>{titulo.day}</span>
      </div>

<div className="detalhe-container">
        <div className="detalhe-header">
          <img className="detalhe-header__imagem" style={{ background:
            'linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url('
            + titulo.imageUrl + ') no-repeat' }} alt=''></img>
          <h1 className="detalhe-header__title">{titulo.name}</h1>
          <h2 className="detalhe-header__sub">{titulo.day}</h2>
        </div>
      </div>
*/