var React = require('react');

var HelloMessage = React.createClass({
  render: function () {
    return <h1>Hello {this.props.message}!</h1>;
  }
});

React.render(<HelloMessage message="World" />, document.body);