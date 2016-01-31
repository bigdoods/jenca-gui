import React, { Component, PropTypes } from 'react'
import Header from './Header'
import Menubar from './Menubar'
import ContentPane from './ContentPane'

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    //const { value, onIncrement, onDecrement } = this.props
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
                mdl-layout--fixed-header">
        <Header />
        <Menubar />
        <ContentPane />
      </div>
    )
  }
}

Layout.propTypes = {
  //value: PropTypes.number.isRequired,
  //onIncrement: PropTypes.func.isRequired,
  //onDecrement: PropTypes.func.isRequired
}

export default Layout