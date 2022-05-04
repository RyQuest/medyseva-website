import React from 'react'
import Header from '../Header'

function PageLayout(props) {
  return (
      <>
          <Header/>
          <div className="container-fluid page-body-wrapper">
              {/* <!-- partial --> */}
              <div className="main-panel">
                  <div className="content-wrapper">{props.children}</div>
              </div>
          </div>
      </>
  )
}

export default PageLayout