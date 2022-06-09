import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieService from "../../../service/MovieService";
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

  const handleRemove = (id) => {
    MovieService.remove(id)
      .then((res) => {
        getAllMovies();
      })
      .catch((e) => {
        console.log(e);
      });
    alert("Xóa thành công!");
  };
  return (
    <div className="movieList">
      <h2>Movie List</h2>
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>
              <Link to="/movies/add">
                <span className="btn btn-success">+</span>
              </Link>
            </th>
            <th>id</th>
            <th>Name</th>
            <th>director</th>
            <th>Start date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies
            ? movies.map((movie) => (
                <tr key={movie.id} className="movieAction">
                  <td></td>
                  <td>{movie.id}</td>
                  <td>{movie.name}</td>
                  <td>{movie.director}</td>
                  <td>{movie.startDate}</td>
                  <td>
                    <Link to={"/movies/edit/" + movie.id}>
                      <span className="ActionIcon editAction">
                        <i className="bi bi-pencil-square"></i>
                      </span>
                    </Link>
                    <span
                      className="ActionIcon deleteAction"
                      onClick={() => handleRemove(movie.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </span>
                  </td>
                </tr>
              ))
            : "no row"}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
