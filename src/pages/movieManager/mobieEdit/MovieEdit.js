import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MovieService from "../../../service/MovieService";
import "./movieEdit.css";

function MovieEdit() {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

  let navigate = useNavigate();
  useEffect(() => {
    console.log(id);
    if (id) {
      getMovie(id);
    }
  }, [id]);
  //onChange props

  const onChangeName = (e) => {
    setMovie({
      ...movie,
      name: e.target.value,
    });
  };
  const onChangeDirector = (e) => {
    setMovie({
      ...movie,
      director: e.target.value,
    });
  };
  const onChangeDuration = (e) => {
    setMovie({
      ...movie,
      duration: e.target.value,
    });
  };
  const onChangeStartDate = (e) => {
    setMovie({
      ...movie,
      startDate: e.target.value,
    });
  };
  const onChangeTrailer = (e) => {
    setMovie({
      ...movie,
      trailer: e.target.value,
    });
  };
  const onChangeDescription = (e) => {
    setMovie({
      ...movie,
      description: e.target.value,
    });
  };

  //getMovie method
  const getMovie = (id) => {
    MovieService.get(id)
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
  const handleEdit = () => {
    MovieService.update(id, movie).then((res) => {
      console.log(res.data);
    });
    alert("Cập nhật phim thành công!");
    navigate("/movies");
  };

  return (
    <>
      {movie ? (
        <div className="movieEdit">
          <h2>Update Movie</h2>
          <form className="newForm">
            <div className="newItem">
              <label>Movie Name:</label>
              <input
                type="text"
                placeholder="DORAEMON: NOBITA VÀ CUỘC CHIẾN ..."
                value={movie.name}
                onChange={onChangeName}
              />
            </div>
            <div className="newItem">
              <label>director:</label>
              <input
                type="text"
                placeholder="Animation Japan"
                value={movie.director}
                onChange={onChangeDirector}
              />
            </div>
            <div className="newItem">
              <label>duration:</label>
              <input
                type="text"
                placeholder="109"
                value={movie.duration}
                onChange={onChangeDuration}
              />
            </div>
            <div className="newItem">
              <label>Start date":</label>
              <input
                type="text"
                placeholder="26/05/2022"
                value={movie.startDate}
                onChange={onChangeStartDate}
              />
            </div>
            <div className="newItem">
              <label>Link trailer:</label>
              <input
                type="text"
                value={movie.trailer}
                onChange={onChangeTrailer}
                placeholder="https://media.lottecinemavn.com/Media/MovieFile/MovieMedia/202205/10882_301_100001.mp4"
              />
            </div>
            <div className="newItem">
              <label>description:</label>
              <textarea
                rows="9"
                cols="70"
                value={movie.description}
                onChange={onChangeDescription}
                placeholder="Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi...."
              />
            </div>
            <button className="newButton" onClick={handleEdit}>
              Update
            </button>
            <Link to={"/movies"} className="newButton cancel">
              Cancel
            </Link>
          </form>
        </div>
      ) : (
        <div>empty</div>
      )}
    </>
  );
}

export default MovieEdit;
