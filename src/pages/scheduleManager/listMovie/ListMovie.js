import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieService from "../../../service/MovieService";
import "./listMovie.css";

function ScheduleList() {
  const [movies, setMovies] = useState([]);
  //list movie with data
  const getAllMovies = () => {
    MovieService.getAll().then((res) => setMovies(res.data));
  };

  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <div className="scheduleList">
      <h2>Movie List</h2>
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Lịch chiếu</th>
          </tr>
        </thead>
        <tbody>
          {movies
            ? movies.map((movie) => (
                <tr key={movie.id} className="movieAction">
                  <td>{movie.id}</td>
                  <td>{movie.name}</td>
                  <td>
                    <Link
                      className="navLink"
                      to={"/moviesList/" + movie.id + "/shedules"}
                    >
                      Xem danh sách
                    </Link>
                  </td>
                </tr>
              ))
            : "no row"}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleList;
