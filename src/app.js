var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  getInitialState: function() {
    return {
      count:0
    }
  },
  clickMe: function() {
    this.setState({
      count:this.state.count+1
    })
  },
  render: function () {
    return <h1>Hello {this.props.message}! <a href="#" onClick={this.clickMe}>CliCk ME</a> - {this.state.count}</h1>;
  }
});

var node = document.getElementById('app');
ReactDOM.render(<HelloMessage message="World" />, node);  
