import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({ year, title, summary, poster, genres }){
   return <div className="movie">
      {/* <label htmlFor></label> */}
      <img src={poster} alt={title} title={title}/>
      <div className="movie__data">
         <h3 className="movie__title">{title}</h3>
         <ul className="genres clearfix">{genres.map((genre, index) => <li key={index} className="genres_genre">#{genre}</li>)}</ul> 
         <h5 className="movie_year" /* style={{color:"#aaa"}} */>{year}</h5>
         <p className="movie__summary">{summary.slice(0,180)}…</p>
      </div>
   </div>
}

Movie.propTypes ={
   id: PropTypes.number.isRequired,
   year: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   summary: PropTypes.string.isRequired,
   poster: PropTypes.string.isRequired,
   genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;