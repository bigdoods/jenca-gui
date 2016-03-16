import React, { Component, PropTypes } from 'react'

class Loading extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <main className="mdl-layout__content">
          <div className="page-content">loading...</div>
        </main>
      </div>
    )
  }
}

Loading.propTypes = {
  //value: PropTypes.number.isRequired,
  //onIncrement: PropTypes.func.isRequired,
  //onDecrement: PropTypes.func.isRequired
}

export default Loading