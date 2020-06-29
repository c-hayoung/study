import React from 'react';
import PropTypes, { string } from "prop-types";

// function App -> class App
class App extends React.Component{
  state = {
    count: 0
  };

  // function part
  add = () => {
    // this.setState({count:this.state.count + 1});
    this.setState(current => ({count:current.count + 1}));
  };
  minus = () => {
    // this.setState({count:this.state.count - 1});
                      // 외부의 state에 의존하는 건 좋은 코드는 아님. current
    this.setState(current => ({count:current.count - 1}));
                      // current : 현재의 state를 받아온다.
  };

  componentDidMount(){
    console.log("component rendered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }

  componentWillUnmount(){
    console.log("Goodbye cruel world..")
  }

  // class-render
  render(){
    return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
