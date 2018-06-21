import React from 'react'
import Header from './Header'

const PageTemplate = ({children}) => {
  return (
    <main>
      <Header/>
      {children}
    </main>
  )
}

export default PageTemplate
