import React, { Component, PropTypes } from 'react'
import Header from './Header'
import Menubar from '../containers/Menubar'

class Layout extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <Header loggedIn={this.props.loggedIn} />
        <Menubar />
        <main className="mdl-layout__content">
          <div className="page-content">{this.props.children}</div>
        </main>
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