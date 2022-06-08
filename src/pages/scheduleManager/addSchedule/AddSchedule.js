import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { LocalizationProvider, DateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";

import moment from "moment";
import RoomService from "../../../service/RoomService";
import "./addSchedule.css";
import ScheduleService from "../../../service/ScheduleService";

function AddSchedule() {
  let { id } = useParams();
  const [rooms, setRooms] = useState([]);
  const [date, setDate] = useState(new Date());
  const [roomId, setRoomId] = useState(1);

  const getAllRoom = () => {
    RoomService.getAll().then((res) => setRooms(res.data));
  };
  console.log(date);
  useEffect(() => {
    getAllRoom();
  }, []);
  console.log(roomId);

  let navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    const valueOfInput = moment(date).format("DD/MM/yyyy HH:mm");
    console.log(valueOfInput);
    const schedule = {
      datetime: valueOfInput,
    };

    console.log(date, id, roomId);

    ScheduleService.create(id, roomId, schedule)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error + "m");
      });
    alert(`Bạn đã thêm lịch chiếu thành công!`);
    navigate("/moviesList/" + id + "/shedules");
  };

  return (
    <div className="addSchedule">
      <h2>New Schedule</h2>
      <form>
        <div className="newItem">
          <label> room:</label>
          <select onChange={(e) => setRoomId(e.target.value)}>
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name}
              </option>
            ))}
          </select>
        </div>
        <div className="newItem dateTimePicker">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Date time"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="newItem"></div>
        <span className="newForm">
          <button className="newButton" onClick={handleAdd}>
            Create
          </button>
          <Link
            to={"/moviesList/" + id + "/shedules"}
            className="newButton cancel"
          >
            Cancel
          </Link>
        </span>
      </form>
    </div>
  );
}

export default AddSchedule;
