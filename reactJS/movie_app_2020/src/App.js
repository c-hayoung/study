import React from 'react';
// import PropTypes, { string } from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./reset.css"
import "./common.css"
import "./App.css"

// function App -> class App
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }

  // data를 fetch from API(Application Programming Interface)
  getMovies = async () => {
    const {data: 
      {data: 
        {movies}
      }
    } =  await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    // this.setState({movies/* state의 movies */:movies/* axios에서 가져온 movies */})
    this.setState({movies, isLoading:false})
    /* ES6형태로 단축할 수 있음. */
  }
  // 비동기식 함수 : axios 접근이 끝나길 기다렸다가, 계속하게끔 명령.

  componentDidMount(){
    this.getMovies()
  }

  // class-render
  render(){
    const { isLoading, movies } = this.state;
    // ES6의 class component
    return (
      <section className="container">
        {isLoading 
          ? <div className="loader">
              <span className="loader__text">Loading. . .</span>
            </div>
          : <div className="movies clearfix">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
            </div>
        }
      </section>
    );
  }
}

export default App;
