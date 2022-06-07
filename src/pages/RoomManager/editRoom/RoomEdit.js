import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RoomService from "../../../service/RoomService";
import "./roomEdit.css";

function RoomEdit() {
  let { id } = useParams();
  const [room, setRoom] = useState(null);

  //   let navigate = useNavigate();

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
  return (
    <>
      {room ? (
        <div className="roomEdit">
          <h2>Update Room</h2>
          <form className="newForm">
            <div className="newItem">
              <label>Room Name:</label>
              <input type="text" placeholder="Phòng 3" value={room.name} />
            </div>
            <button className="newButton">Update</button>
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
