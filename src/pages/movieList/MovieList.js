import React, { useEffect, useState } from "react";
import MovieService from "../../service/MovieService";
import "./movieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  //list movie with data
  const getAllMovies = () => {
    MovieService.getAll().then((res) => setMovies(res.data));
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="movieList">
      <h2>MovieList</h2>
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>
              <span className="btn btn-success">+</span>
            </th>
            <th>id</th>
            <th>Name</th>
            <th>director</th>
            <th>Start date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} className="movieAction">
              <td></td>
              <td>{movie.id}</td>
              <td>{movie.name}</td>
              <td>{movie.director}</td>
              <td>{movie.startDate}</td>
              <td>
                <span className="ActionIcon editAction">
                  <i className="bi bi-pencil-square"></i>
                </span>
                <span className="ActionIcon deleteAction">
                  <i class="bi bi-trash"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
