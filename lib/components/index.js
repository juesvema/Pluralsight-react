import ReactDom from 'react-dom';

import React, { Component } from 'react';

class App extends Component {
  state = {
    answer: 42
  }
  render() {
    return (
      <div>
        <h2>Hello {this.state.answer}</h2>
      </div>
    );
  }
}

export default App;

ReactDom.render(
  <App/>,
  document.getElementById('root')
);
