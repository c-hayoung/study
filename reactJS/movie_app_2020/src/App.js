import React from 'react';
import PropTypes, { string } from "prop-types";

// function App -> class App
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }

  // data를 fetch from API(Application Programming Interface)
  componentDidMount(){
    setTimeout(() =>{
      this.setState({isLoading:false})
    },6000);
  }

  // class-render
  render(){
    const { isLoading } = this.state;
    // ES6의 class component
    return <div>{isLoading ? "Loading. . .":"We are ready"}</div>;
  }
}

export default App;
