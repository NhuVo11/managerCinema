import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieService from "../../../service/MovieService";
import "./addMovie.css";

function AddMovie() {
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [trailer, setTrailer] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  const handleAdd = () => {
    const movie = {
      name: name,
      director: director,
      duration: duration,
      startDate: startDate,
      trailer: trailer,
      description: description,
    };
    // console.log(movie);
    MovieService.create(movie)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    alert(
      `Bạn đã thêm phim mới: ${name} thành công và quay về trang danh sách phim`
    );
    navigate("/movies");
  };
  return (
    <div className="addMovie">
      <h2>New Movie</h2>
      <form className="newForm">
        <div className="newItem">
          <label>Movie Name:</label>
          <input
            type="text"
            placeholder="DORAEMON: NOBITA VÀ CUỘC CHIẾN ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="newItem">
          <label>director:</label>
          <input
            type="text"
            placeholder="Animation Japan"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
          />
        </div>
        <div className="newItem">
          <label>duration:</label>
          <input
            type="text"
            placeholder="109"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div className="newItem">
          <label>Start date:</label>
          <input
            type="text"
            placeholder="26/05/2022"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="newItem">
          <label>Link trailer:</label>
          <input
            type="text"
            placeholder="https://media.lottecinemavn.com/Media/MovieFile/MovieMedia/202205/10882_301_100001.mp4"
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
            required
          />
        </div>
        <div className="newItem">
          <label>description:</label>
          <textarea
            rows="9"
            cols="70"
            placeholder="Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi...."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button className="newButton" onClick={handleAdd}>
          Create
        </button>
        <Link to={"/movies"} className="newButton cancel">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default AddMovie;
