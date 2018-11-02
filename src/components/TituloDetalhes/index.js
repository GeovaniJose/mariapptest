import React, { Component } from 'react'
import NProgress from 'nprogress'

import Loading from '../Loading/index'
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
      NProgress.done()
    } catch (err) {
      console.log(err)

      document.querySelector('#nprogress .bar').style.backgroundColor = "#f00";
      NProgress.done()
    }
  }

  renderTela = (titulo) => (
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
  )

  render() {
    const { titulo } = this.state

    return (
      (titulo.name && this.renderTela(titulo))
      || <Loading />
    )
  }
}    