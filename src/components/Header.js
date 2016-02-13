import React, { Component, PropTypes } from 'react'

class Header extends Component {

  render() {
    //const { value, onIncrement, onDecrement } = this.props
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                      mdl-textfield--floating-label mdl-textfield--align-right">
            <label className="mdl-button mdl-js-button mdl-button--icon"
                   htmlFor="fixed-header-drawer-exp">
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" name="sample"
                     id="fixed-header-drawer-exp" />
            </div>
          </div>
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