import React, { Component, PropTypes } from 'react'
import { Grid, Cell, Spinner } from 'react-mdl'

class Loading extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-color--white-100">
      <main className="mdl-layout__content">
            <Spinner />
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