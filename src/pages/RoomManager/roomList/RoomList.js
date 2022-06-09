import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoomService from "../../../service/RoomService";
import "./roomList.css";

function RoomList() {
  const [rooms, setRooms] = useState([]);

  const handleRemove = (id) => {
    RoomService.remove(id)
      .then((res) => {
        getAllRoom();
      })
      .catch((e) => {
        console.log(e);
      });
    alert("Xóa thành công!");
  };

  const getAllRoom = () => {
    RoomService.getAll().then((res) => setRooms(res.data));
  };

  useEffect(() => {
    getAllRoom();
  }, []);

  return (
    <div className="roomList">
      <h2>Room List</h2>
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>
              <Link to="/rooms/add">
                <span className="btn btn-success">+</span>
              </Link>
            </th>
            <th>id</th>
            <th>Name</th>
            <th>List seats</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms
            ? rooms.map((room) => (
                <tr key={room.id} className="roomAction">
                  <td></td>
                  <td>{room.id}</td>
                  <td>{room.name}</td>
                  <td>
                    <Link
                      to={"/rooms/" + room.id + "/seats"}
                      className="navLink"
                    >
                      Danh sách ghế {room.name}
                    </Link>
                  </td>
                  <td>
                    <Link to={"/rooms/edit/" + room.id}>
                      <span className="ActionIcon editAction">
                        <i className="bi bi-pencil-square"></i>
                      </span>
                    </Link>
                    <span
                      className="ActionIcon deleteAction"
                      onClick={() => handleRemove(room.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </span>
                  </td>
                </tr>
              ))
            : "no row"}
        </tbody>
      </table>
    </div>
  );
}

export default RoomList;
