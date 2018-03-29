var React            = require('react');
var ReactDOM         = require('react-dom');
var createReactClass = require('create-react-class');

//コンポーネントを定義
var Index = createReactClass({
  render:function() {
    return (
        <p>This page has been written in react.js.</p>
    );
  }
});

import { hoge } from 'react';



//id='content'の要素にコンポーネント「Index」を挿入してレンダリング
ReactDOM.render(
  <Index />,
  document.getElementById('content')
);