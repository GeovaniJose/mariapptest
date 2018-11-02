import React, { Component } from 'react'
import LoadingBar from 'react-redux-loading-bar'

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
    const { id } = this.props.match.params;

    const response = await api.get(`/titulos/${id}`)

    this.setState({ titulo: response.data, historia: response.data.history })
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