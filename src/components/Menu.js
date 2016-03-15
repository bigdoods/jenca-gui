import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Menubar extends Component {
  render() {
    //const { value, onIncrement, onDecrement } = this.props
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Jenca</span>
        <nav className="mdl-navigation">
        {
          this.props.links.map(function(link){
            return (
              <Link className="mdl-navigation__link" key={link.url} to={link.url}>{link.title}</Link>
            )
          })
        }
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