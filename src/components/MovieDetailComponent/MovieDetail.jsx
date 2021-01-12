import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import "./MovieDetail.css";

function MovieDetail(props) {
  const { movies } = props;
  const [movie, setMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    setMovie(
      movies.filter(item => Number(item.id) === Number(params.movieID))[0]
    )
  }, [])

  return (
    <>
      <div className="col-sm-6 offset-sm-3 mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{movie.title}</li>
          </ol>
        </nav>
      </div>
      <div className="col-md-4">
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="..." className="movie-detail-img" />
      </div>
      <div className="col-md">
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.overview}</p>
          <p>VOTE AVERAGE
            <div class="flex-wrapper">
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart orange">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"
                    stroke-dasharray={`${movie.vote_average * 10}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" class="percentage">{movie.vote_average}</text>
                </svg>
              </div>
            </div>
          </p>
        </div>
      </div>
      <div
        className="mt-3"
        id="movie-backgroundImage"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
        }}
      >
      </div>
    </>
  )
}

export default MovieDetail;