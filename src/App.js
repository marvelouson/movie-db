import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css"

import Movie from './components/MovieComponent/Movie';
import MovieDetail from './components/MovieDetailComponent/MovieDetail';
import Http404 from "./components/404Component/HTTP404";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/FooterComponent/Footer";

const API_KEY = "76102b4420a77f8a0c8c2a65e41794a1";

function App() {
  const [movies, setMovies] = useState([]);

  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  useEffect(() => {
    fetch(URL).then(response => response.json())
      .then(data => setMovies(data.results));
  }, [])

  return (
    <BrowserRouter>
      <div className="container mt-3">
        <div className="row">
          <Navbar path="/popular"/>
          <Switch>
            <Route path="/popular">
              {
                movies.filter(item => item.poster_path)
                  .map(item => <Movie key={item.id} movie={item} />)
              }
            </Route>
            <Route path="/search/:query">
              <Movie movies={movies}/>
            </Route>
            <Route path="/movie/:movieID">
              <MovieDetail movies={movies} />
            </Route>
            <Route path="/404">
              <Http404 />
            </Route>
            <Redirect path="*" to="/popular" />
          </Switch>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
