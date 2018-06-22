import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './home/Home'
import Orders from './orders/Orders'
import Product from './product/Product'

const App = () =>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/orders" component={Orders}/>
    <Route path="/product" component={Product}/>
  </Switch>


export default App