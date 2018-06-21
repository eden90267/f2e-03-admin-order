import React from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'

const PageTemplate = ({children, match}) => {
  return (
    <div>
      <Header match={match}/>
      {children}
    </div>
  )
}

export default withRouter(PageTemplate)
