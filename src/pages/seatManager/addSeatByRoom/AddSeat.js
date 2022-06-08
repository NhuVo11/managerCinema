import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SeatService from "../../../service/SeatService";
import "./addSeat.css";

function AddSeat() {
  let { id } = useParams();

  const [name, setName] = useState("");

  let navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();

    const seat = {
      name: name,
      status: "false",
    };

    console.log(seat, id);

    SeatService.create(id, seat)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error + "m");
      });
    alert(`Bạn đã thêm ghế ${name} thành công và quay về trang danh sách ghế`);
    navigate("/rooms/" + id + "/seats");
  };
  return (
    <div className="addRoom">
      <h2>New Seat</h2>
      <form className="newForm">
        <div className="newItem">
          <label> Name:</label>
          <input
            type="text"
            placeholder="1B"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="newItem"></div>
        <button className="newButton" onClick={(e) => handleAdd(e)}>
          Create
        </button>
        <Link to={"/rooms/" + id + "/seats"} className="newButton cancel">
          Cancel
        </Link>
      </form>
    </div>
  );
}
export default AddSeat;
