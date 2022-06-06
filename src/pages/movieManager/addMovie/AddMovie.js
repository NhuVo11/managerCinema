import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieService from "../../../service/MovieService";
import "./addMovie.css";

function AddMovie() {
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [trailer, setTrailer] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    // const dateFormat = startDate.format("YYYY-MM-DD");
    const movie = {
      name: name,
      director: director,
      duration: duration,
      startDate: startDate,
      trailer: trailer,
      description: description,
    };
    console.log(movie);
    MovieService.create(movie)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="addMovie">
      <h2>New Movie</h2>
      <form className="newMovieForm">
        <div className="newMovieItem">
          <label>Movie Name:</label>
          <input
            type="text"
            placeholder="DORAEMON: NOBITA VÀ CUỘC CHIẾN ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="newMovieItem">
          <label>director:</label>
          <input
            type="text"
            placeholder="Animation Japan"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        <div className="newMovieItem">
          <label>duration:</label>
          <input
            type="text"
            placeholder="109"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="newMovieItem">
          <label>Start date":</label>
          <input
            type="text"
            placeholder="26/05/2022"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="newMovieItem">
          <label>Link trailer:</label>
          <input
            type="text"
            placeholder="https://media.lottecinemavn.com/Media/MovieFile/MovieMedia/202205/10882_301_100001.mp4"
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
          />
        </div>
        <div className="newMovieItem">
          <label>description:</label>
          <textarea
            rows="9"
            cols="70"
            placeholder="Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi...."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="newMovieButton" onClick={handleAdd}>
          Create
        </button>
        <Link to={"/movies"} className="newMovieButton cancel">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default AddMovie;
