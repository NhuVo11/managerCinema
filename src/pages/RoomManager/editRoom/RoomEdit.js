import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RoomService from "../../../service/RoomService";
import "./roomEdit.css";

function RoomEdit() {
  let { id } = useParams();

  let navigate = useNavigate();

  const [room, setRoom] = useState(null);
  useEffect(() => {
    console.log(id);
    if (id) {
      getRoom(id);
    }
  }, [id]);

  const getRoom = (id) => {
    RoomService.get(id)
      .then((res) => {
        setRoom(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
  //onChange props

  const onChangeName = (e) => {
    setRoom({
      ...room,
      name: e.target.value,
    });
  };

  const handleUpdate = () => {
    RoomService.update(id, room).then((res) => {
      console.log(res.data);
    });
    alert("Cập nhật tên phòng thành công!");
    navigate("/rooms");
  };

  return (
    <>
      {room ? (
        <div className="roomEdit">
          <h2>Update Room</h2>
          <form className="newForm">
            <div className="newItem">
              <label>Room Name:</label>
              <input
                type="text"
                placeholder="Phòng 3"
                value={room.name}
                onChange={onChangeName}
              />
            </div>
            <div className="newItem"></div>
            <button className="newButton" onClick={handleUpdate}>
              Update
            </button>
            <Link to={"/rooms"} className="newButton cancel">
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

export default RoomEdit;
