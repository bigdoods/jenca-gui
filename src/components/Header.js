import React, { Component, PropTypes } from 'react'

class Header extends Component {

  render() {
    //const { value, onIncrement, onDecrement } = this.props
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <div className="mdl-layout-spacer"></div>
          The simple way to run BIM apps in the cloud!
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  //value: PropTypes.number.isRequired,
  //onIncrement: PropTypes.func.isRequired,
  //onDecrement: PropTypes.func.isRequired
}

export default Header