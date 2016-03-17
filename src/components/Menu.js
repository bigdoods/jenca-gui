import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Drawer, Navigation } from 'react-mdl'

class Menubar extends Component {

  handleLogout(e) {
    e && e.preventDefault()
    this.props.handleLogout()
  }

  render() {
    //const { value, onIncrement, onDecrement } = this.props
    return (
      <Drawer>
        <div id="jenca-logo">
          <img src={"/elements/jenca-blk.png"} alt="jenca" width="50%" />
        </div>
          <Navigation>
            {
              this.props.links.map(function(link){
                return (
                  <Link className="mdl-navigation__link" key={link.url} to={link.url}>{link.title}</Link>
                )
              })
            }
            <a className="mdl-navigation__link" href="#" onClick={this.handleLogout.bind(this)}>Logout</a>
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
