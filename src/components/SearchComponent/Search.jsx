import React, { useState } from 'react'

import Movie from "../MovieComponent/Movie"
import "./Search.css"

const API_KEY = "76102b4420a77f8a0c8c2a65e41794a1";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    fetch(URL).then(response => response.json())
      .then(data => setMovies(data.results));
  }
  return (
    <div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Find Your Movie..." aria-label="Search"
          name="query"
          onChange={event => setQuery(event.target.value)}
        />
        <button
          id="search"
          className="btn btn-outline-secondary" type="submit"
          onClick={handleSearch}
        ></button>
      </form>
    </div>
  )
}

export default Search
