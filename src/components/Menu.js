import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Drawer, Navigation } from 'react-mdl'

class Menubar extends Component {
  render() {
    //const { value, onIncrement, onDecrement } = this.props
    return (
      <Drawer title="Jenca">
          <Navigation>
            {
              this.props.links.map(function(link){
                return (
                  <Link className="mdl-navigation__link" key={link.url} to={link.url}>{link.title}</Link>
                )
              })
            }
          </Navigation>
      </Drawer>
    )
  }
}

Menubar.propTypes = {
  //value: PropTypes.number.isRequired,
  //onIncrement: PropTypes.func.isRequired,
  //onDecrement: PropTypes.func.isRequired
}

export default Menubar