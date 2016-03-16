import React, { Component, PropTypes } from 'react'

class Loading extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <main className="mdl-layout__content">

          <div id="loading">
            <h2 className="mdl-card__title-text">Loading...</h2>
            <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
          </div>

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