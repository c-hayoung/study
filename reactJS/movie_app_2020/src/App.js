import React from 'react';
import PropTypes, { string } from "prop-types";

// function App -> class App
class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    this.state.count++;
    console.log("add");
    console.log(this.state.count);
  };
  minus = () => {
    this.state.count--;
    console.log("minus");
    console.log(this.state.count);
  };
  render(){
    return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
