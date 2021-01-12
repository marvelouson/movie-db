import React from 'react';
import { Link } from "react-router-dom";

import "./Movie.css"

function Movie(props) {
  const { id, title, poster_path, release_date } = props.movie;

  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 my-4 d-flex flex-column">
      <div className="card-movie h-100 text-center">
        <Link to={`/movie/${id}`} className="">
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="poster" />
          <div className="info">
            <span className="title">{`${title} (${release_date.slice(0, 4) || null})`}</span>
          </div>
        </Link >
      </div>
    </div>
  )
}

export default Movie;
