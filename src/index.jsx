import React from 'react';
import {render} from 'react-dom';

class HelloWorld extends React.Component {
  render () {
    return (
      <p>Hello World!</p>
    );
  }
}

render(<HelloWorld/>, document.getElementById('app'));