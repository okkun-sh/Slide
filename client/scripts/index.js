var React            = require('react');
var ReactDOM         = require('react-dom');
var createReactClass = require('create-react-class');

class SlideComponent extends React.Component {
  constructor(props, context, updater) {
    super(props, context, updater);
    this.state = { word : 'hoge' };
  }

  handleKeyDown(e) {
    if (e.keyCode == 39) {
      this.setState({word: 'foo'});
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  render() {
    return (
      <h1>{this.state.word}</h1>
    )
  }
}

ReactDOM.render(
  React.createElement(SlideComponent),
  document.getElementById('content')
);
