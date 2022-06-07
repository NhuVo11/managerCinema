import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieService from "../../../service/MovieService";
import "./movieEdit.css";

function MovieEdit() {
  let { id } = useParams();
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    console.log(id);
    if (id) {
      getMovie(id);
    }
  }, [id]);
  const getMovie = (id) => {
    MovieService.get(id)
      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
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
              />
            </div>
            <div className="newItem">
              <label>director:</label>
              <input
                type="text"
                placeholder="Animation Japan"
                value={movie.director}
              />
            </div>
            <div className="newItem">
              <label>duration:</label>
              <input type="text" placeholder="109" value={movie.duration} />
            </div>
            <div className="newItem">
              <label>Start date":</label>
              <input
                type="text"
                placeholder="26/05/2022"
                value={movie.startDate}
              />
            </div>
            <div className="newItem">
              <label>Link trailer:</label>
              <input
                type="text"
                value={movie.trailer}
                placeholder="https://media.lottecinemavn.com/Media/MovieFile/MovieMedia/202205/10882_301_100001.mp4"
              />
            </div>
            <div className="newItem">
              <label>description:</label>
              <textarea
                rows="9"
                cols="70"
                value={movie.description}
                placeholder="Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi...."
              />
            </div>
            <button className="newButton">Update</button>
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
