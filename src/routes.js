import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/Home/index'
import TituloDetalhes from './components/TituloDetalhes/index'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/titulos/:id" component={TituloDetalhes} />
    </Switch>
  </BrowserRouter>
)

export default Routes