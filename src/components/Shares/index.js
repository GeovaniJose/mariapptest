import React, { Component } from 'react';

import api from '../../services/api'

import './styles.css'

export default class Shares extends Component {
  render () {
    return (
      <div className='shares'>
        <ul type='none' align='center'>
          <li><img className='shares__icon shares__icon--big' src='/images/icon-hand-pray.png' /></li>
          <li><img className='shares__icon' src='/images/icon-face.png' /></li>
        </ul>
      </div>
    )
  }
}
