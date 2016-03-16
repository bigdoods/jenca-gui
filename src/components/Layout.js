import React, { Component, PropTypes } from 'react'
import Header from './Header'
import Menu from '../containers/Menu'
import { Layout, Content } from 'react-mdl'

class LayoutComponent extends Component {
  render() {
    return (

      <Layout fixedHeader fixedDrawer>
        <Header />
        <Menu />
        <Content>
          {this.props.children}
        </Content>
      </Layout>

    )
  }
}

LayoutComponent.propTypes = {
  //value: PropTypes.number.isRequired,
  //onIncrement: PropTypes.func.isRequired,
  //onDecrement: PropTypes.func.isRequired
}

export default LayoutComponent