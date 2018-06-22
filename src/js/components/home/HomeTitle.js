import React from 'react'

import 'components/home/HomeTitle.scss'

const HomeTitle = () => {
  return (
    <div className="mt-4 mb-3 d-flex align-items-center home_title">
      <h2 className="mb-0">OVERVIEW</h2>
      <small className="d-block ml-auto home_date-start">2018/6/6</small>
      <small className="d-block mx-2 home_date-arrow"/>
      <small className="d-block mr-3 home_date-end">2018/6/13</small>
      <div className="dropdown home_date-type">
        <button className="btn btn-sm btn-white dropdown-toggle" type="button" id="ddDateType"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Weekly
        </button>
        <div className="dropdown-menu" aria-labelledby="ddDateType">
          <a className="dropdown-item" href="#">Daily</a>
          <a className="dropdown-item" href="#">Weekly</a>
          <a className="dropdown-item" href="#">Monthly</a>
          <a className="dropdown-item" href="#">Yearly</a>
          <a className="dropdown-item" href="#">Custom</a>
        </div>
      </div>
    </div>
  )
}

export default HomeTitle
