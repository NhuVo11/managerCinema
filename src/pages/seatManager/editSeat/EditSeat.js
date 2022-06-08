import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SeatService from "../../../service/SeatService";
import "./editSeat.css";

function EditSeat() {
  let { id } = useParams();
  const [seat, setSeat] = useState(null);

  //   let navigate = useNavigate();

  useEffect(() => {
    console.log(id);
    if (id) {
      getSeat(id);
    }
  }, [id]);

  const getSeat = (id) => {
    SeatService.get(id)
      .then((res) => {
        setSeat(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      {seat ? (
        <div className="seatEdit">
          <h2>Update Seat</h2>
          <form className="newForm">
            <div className="newItem">
              <label>Seat Name:</label>
              <input type="text" placeholder="Phòng 3" value={seat.name} />
            </div>
            <div className="newItem">
              <label>Seat Status:</label>
              <input
                type="text"
                placeholder="Phòng 3"
                value={seat.status ? "Đã đặt" : "Chưa đặt"}
              />
            </div>
            <div className="newItem"></div>
            <button className="newButton">Update</button>
            <Link to={"/rooms/" + id + "/seats"} className="newButton cancel">
              Cancel
            </Link>
          </form>
        </div>
      ) : (
        <div>empty room</div>
      )}
    </>
  );
}

export default EditSeat;
