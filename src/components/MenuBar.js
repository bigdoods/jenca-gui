import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Menubar extends Component {
  render() {
    //const { value, onIncrement, onDecrement } = this.props
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <Link className="mdl-navigation__link" to="/">Home</Link>
          <Link className="mdl-navigation__link" to="/foo">Foo</Link>
          <Link className="mdl-navigation__link" to="/bar">Bar</Link>
        </nav>
      </div>
    )
  }
}

Menubar.propTypes = {
  //value: PropTypes.number.isRequired,
  //onIncrement: PropTypes.func.isRequired,
  //onDecrement: PropTypes.func.isRequired
}

export default Menubar