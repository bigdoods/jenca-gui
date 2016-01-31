import React, { Component, PropTypes } from 'react'

class ContentPane extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    //const { value, onIncrement, onDecrement } = this.props
    return (
      <main className="mdl-layout__content">
        <div className="page-content">Content here</div>
      </main>
    )
  }
}

ContentPane.propTypes = {
  //value: PropTypes.number.isRequired,
  //onIncrement: PropTypes.func.isRequired,
  //onDecrement: PropTypes.func.isRequired
}

export default ContentPane