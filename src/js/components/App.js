import React from 'react'

import 'components/App.scss'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Orders from './Orders'
import Product from './Product'

const App = () =>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/orders" component={Orders}/>
    <Route path="/product" component={Product}/>
  </Switch>


export default App