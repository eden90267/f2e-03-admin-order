import React, {Component} from 'react'
import PropTypes from 'prop-types'

import 'components/home/HomeActivity.scss'

class HomeActivity extends Component {

  render() {
    return (
      <div className="mb-3 home-block home_activity">
        <h2>Activity</h2>
        <div id="chart"/>
      </div>
    )
  }


  componentDidMount() {
    c3.generate({
      bindto: '#chart',
      data: {
        xs: {
          'TOTAL REVENUE': 'x1',
          'TOTAL COST': 'x2',
          'NET INCOME': 'x3'
        },
        columns: [
          ['x1', 6, 7, 8, 9, 10, 11, 12, 13],
          ['x2', 6, 7, 8, 9, 10, 11, 12, 13],
          ['x3', 6, 7, 8, 9, 10, 11, 12, 13],
          ['TOTAL REVENUE', 7133, 7001, 5250, 7200, 5895, 6130, 7032, 6988],
          ['TOTAL COST', 6102, 5430, 1992, 4108, 5203, 5390, 6490, 4998],
          ['NET INCOME', 882, 890, 2620, 2975, 2410, 796, 850, 1987]
        ],
        colors: {
          'TOTAL REVENUE': '#7ED321',
          'TOTAL COST': '#D0021B',
          'NET INCOME': '#4A90E2'
        }
      }
    })
  }

}

HomeActivity.propTypes = {}

export default HomeActivity
