import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RoomService from "../../../service/RoomService";
import "./addRoom.css";

function AddRoom() {
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleAdd = () => {
    const room = {
      name: name,
    };
    console.log(room);
    RoomService.create(room)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    alert(`Bạn đã thêm ${name} thành công và quay về trang danh sách phòng`);
    navigate("/rooms");
  };
  return (
    <div className="addRoom">
      <h2>New Room</h2>
      <form className="newForm">
        <div className="newItem">
          <label> Name:</label>
          <input
            type="text"
            placeholder="Phòng 3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="newItem"></div>
        <button className="newButton" onClick={handleAdd}>
          Create
        </button>
        <Link to={"/rooms"} className="newButton cancel">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default AddRoom;
