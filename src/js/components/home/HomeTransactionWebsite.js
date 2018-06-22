import React from 'react'
import Facebook from 'react-icons/lib/fa/facebook-square'
import Google from 'react-icons/lib/fa/google'
import Shopify from 'react-icons/lib/fa/shopping-bag'
import Wordpress from 'react-icons/lib/fa/wordpress'
import ArrowUp from 'react-icons/lib/fa/arrow-up'
import ArrowDown from 'react-icons/lib/fa/arrow-down'

import 'components/home/HomeTransactionWebsite.scss'

const HomeTransactionWebsite = () => {
  return (
    <div className="mb-3 home-block home_transaction-website">
      <h2>Transaction Website</h2>
      <ul className="list-unstyled mb-0">
        <li className="d-flex align-items-center py-3">
          <Facebook size={45} className="mr-3"/>
          <span className="d-block home_transaction-website_item_url">Facebook.com</span>
          <span className="d-block ml-auto mr-3 home_transaction-website_item_count">45,836</span>
          <ArrowUp size={18} className="mr-2 home_transaction-website_item_arrow-up"/>
          <span className="d-block home_transaction-website_item_percentage-up">20%</span>
        </li>
        <li className="d-flex align-items-center py-3">
          <Google size={45} className="mr-3"/>
          <span className="d-block home_transaction-website_item_url">Google.com</span>
          <span className="d-block ml-auto mr-3 home_transaction-website_item_count">23,582</span>
          <ArrowUp size={18} className="mr-2 home_transaction-website_item_arrow-up"/>
          <span className="d-block home_transaction-website_item_percentage-up">12%</span>
        </li>
        <li className="d-flex align-items-center py-3">
          <Shopify size={45} className="mr-3"/>
          <span className="d-block home_transaction-website_item_url">Shopify.com</span>
          <span className="d-block ml-auto mr-3 home_transaction-website_item_count">2,489</span>
          <ArrowDown size={18} className="mr-2 home_transaction-website_item_arrow-down"/>
          <span className="d-block home_transaction-website_item_percentage-down">15%</span>
        </li>
        <li className="d-flex align-items-center py-3">
          <Wordpress size={45} className="mr-3"/>
          <span className="d-block home_transaction-website_item_url">Wordpress.com</span>
          <span className="d-block ml-auto mr-3 home_transaction-website_item_count">1,057</span>
          <ArrowDown size={18} className="mr-2 home_transaction-website_item_arrow-down"/>
          <span className="d-block home_transaction-website_item_percentage-down">30%</span>
        </li>
      </ul>
    </div>
  )
}

export default HomeTransactionWebsite
