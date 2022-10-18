import React, { Component } from 'react';
import Display from './Display';
// import Component name from filePath;

class App extends Component {
  state = {
    firstName: 'alina',
    age: 20,
    designation: 'developer'
  }

  handleClick = () => {
    this.setState({
      firstName: 'alex'
    });
  }

  // render method is called everytime when state is updated
  render() {
    return (
      // jsx
      <div>
      {/* via HTML attribute */}
        <Display data={this.state} />
        Hello
        <button onClick={this.handleClick}>Update</button>
      </div>
    )
  }
}

export default App;


{/* <img src="" alt="">
<a href="" target="_blank"></a>
attributes: global, element-specific */}

// React.createElement(App)
