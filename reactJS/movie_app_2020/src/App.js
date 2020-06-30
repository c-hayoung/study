import React from 'react';
import PropTypes, { string } from "prop-types";
import axios from "axios";

// function App -> class App
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }

  // data를 fetch from API(Application Programming Interface)
  getMovies = async () => {
    const movies =  await axios.get("https://yts.mx/api/v2/list_movies.json");
  }
  // 비동기식 함수 : axios 접근이 끝나길 기다렸다가, 계속하게끔 명령.

  componentDidMount(){
    this.getMovies()
  }

  // class-render
  render(){
    const { isLoading } = this.state;
    // ES6의 class component
    return <div>{isLoading ? "Loading. . .":"We are ready"}</div>;
  }
}

export default App;
