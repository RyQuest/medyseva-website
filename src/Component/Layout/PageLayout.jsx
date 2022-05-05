import React from 'react'
import Header from '../Header'
// import SideBar from '../SideBar'

function PageLayout(props) {
  return (
      <>
          <Header/>
          <div className="container-fluid page-body-wrapper">
              {/* <SideBar/> */}
              <div className="main-panel">
                  <div className="content-wrapper">{props.children}</div>
              </div>
          </div>
      </>
  )
}

export default PageLayout