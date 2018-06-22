import React from 'react'
import PageTemplate from '../PageTemplate'

import 'components/home/Home.scss'

import HomeTitle from './HomeTitle'
import HomeTotal from './HomeTotal'
import HomeActivity from './HomeActivity'
import HomeTransactionWebsite from './HomeTransactionWebsite'
import HomeLatestOrders from './HomeLatestOrders'

const Home = () => {
  return (
    <PageTemplate>
      <div className="wrapper home">
        <HomeTitle/>
        <HomeTotal/>
        <HomeActivity/>
        <div className="d-flex justify-content-between">
          <HomeTransactionWebsite/>
          <HomeLatestOrders/>
        </div>
      </div>
    </PageTemplate>
  )
}

export default Home
