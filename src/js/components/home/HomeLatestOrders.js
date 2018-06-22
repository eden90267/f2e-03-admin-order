import React from 'react'
import Clock from 'react-icons/lib/fa/clock-o'
import Person from 'react-icons/lib/io/person'

import 'components/home/HomeLatestOrders.scss'

const HomeLatestOrder = () => {
  return (
    <div className="mb-3 home-block home_latest-orders">
      <h2>Latest Orders</h2>
      <ul className="list-unstyled mb-0">
        <li className="media align-items-center py-2">
          <img className="mr-3" src={require('../../../../assets/index01.png')} />
          <div className="media-body">
            <h5 className="mt-0 mb-1">Vintage T-shirt</h5>
            <ul className="list-inline d-flex">
              <li className="list-inline-item d-flex align-items-center home_latest-orders_item_time">
                <Clock size={10} className="mr-1"/>
                <time>2018/6/13 13:42</time>
              </li>
              <li className="list-inline-item ml-auto">
                <small>Total</small>
              </li>
            </ul>
            <ul className="list-inline d-flex">
              <li className="list-inline-item d-flex align-items-center home_latest-orders_item_person">
                <Person size={10} className="mr-1"/>
                <span>Belle Willis</span>
              </li>
              <li className="list-inline-item ml-auto home_latest-orders_item_total">
                3,200
              </li>
            </ul>
          </div>
        </li>
        <li className="media align-items-center py-2">
          <img className="mr-3" src={require('../../../../assets/index02.png')} />
          <div className="media-body">
            <h5 className="mt-0 mb-1">Cowboy Jacket</h5>
            <ul className="list-inline d-flex">
              <li className="list-inline-item d-flex align-items-center home_latest-orders_item_time">
                <Clock size={10} className="mr-1"/>
                <time>2018/6/13 10:45</time>
              </li>
              <li className="list-inline-item ml-auto">
                <small>Total</small>
              </li>
            </ul>
            <ul className="list-inline d-flex">
              <li className="list-inline-item d-flex align-items-center home_latest-orders_item_person">
                <Person size={10} className="mr-1"/>
                <span>Adrian Cummings</span>
              </li>
              <li className="list-inline-item ml-auto home_latest-orders_item_total">
                2,800
              </li>
            </ul>
          </div>
        </li>
        <li className="media align-items-center py-2">
          <img className="mr-3" src={require('../../../../assets/index03.png')} />
          <div className="media-body">
            <h5 className="mt-0 mb-1">Coach Coat</h5>
            <ul className="list-inline d-flex">
              <li className="list-inline-item d-flex align-items-center home_latest-orders_item_time">
                <Clock size={10} className="mr-1"/>
                <time>2018/6/13 8:26</time>
              </li>
              <li className="list-inline-item ml-auto">
                <small>Total</small>
              </li>
            </ul>
            <ul className="list-inline d-flex">
              <li className="list-inline-item d-flex align-items-center home_latest-orders_item_person">
                <Person size={10} className="mr-1"/>
                <span>Lura Holland</span>
              </li>
              <li className="list-inline-item ml-auto home_latest-orders_item_total">
                1,600
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default HomeLatestOrder
