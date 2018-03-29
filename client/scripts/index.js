var React            = require('react');
var ReactDOM         = require('react-dom');
var createReactClass = require('create-react-class');

var Index = createReactClass({
  render:function() {
    return (
        <p>This page has been written in react.js.</p>
    );
  }
});

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);