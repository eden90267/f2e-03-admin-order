import React from 'react'
import Money from 'react-icons/lib/fa/money'
import Dropbox from 'react-icons/lib/fa/dropbox'
import Magnet from 'react-icons/lib/fa/magnet'

import 'components/home/HomeTotal.scss'

const HomeTotal = () => {
  return (
    <div className="d-flex mb-3 justify-content-between home-total">
      <div className="text-center home-block home_total-revenue">
        <h3><Money size={32} className="mr-1"/>TOTAL REVENUE</h3>
        <h4>54,540</h4>
      </div>
      <div className="text-center home-block home_total-cost">
        <h3><Dropbox size={32} className="mr-1"/>TOTAL COST</h3>
        <h4>12,660</h4>
      </div>
      <div className="text-center home-block home_net-income">
        <h3><Magnet size={32} className="mr-1"/>NET INCOME</h3>
        <h4>41,880</h4>
      </div>
    </div>
  )
}

export default HomeTotal
