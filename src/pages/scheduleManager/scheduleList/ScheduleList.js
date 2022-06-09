import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ScheduleService from "../../../service/ScheduleService";
import "./scheduleList.css";

function ScheduleList() {
  let { id } = useParams();
  const [schedules, setShedules] = useState(null);

  useEffect(() => {
    console.log(id);
    if (id) {
      getAllSchedule(id);
    }
  }, [id]);

  const getAllSchedule = (id) => {
    ScheduleService.getAll(id)
      .then((res) => {
        setShedules(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="scheduleList">
      <h2>Schedule List</h2>
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>
              <Link to={"/moviesList/" + id + "/shedules/add"}>
                <span className="btn btn-success">+</span>
              </Link>
            </th>
            <th>id</th>
            <th>Date Time</th>
            <th>Room</th>
            <th>Tickets List</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schedules
            ? schedules.map((schedule) => (
                <tr key={schedule.id} className="movieAction">
                  <td></td>
                  <td>{schedule.id}</td>
                  <td>{schedule.datetime}</td>
                  <td>{schedule.room.name}</td>
                  <td>
                    <Link
                      to={"/shedules/" + schedule.id + "/tickets"}
                      className="navLink"
                    >
                      Xem danh sách vé
                    </Link>
                  </td>
                  <td>
                    <Link to={"/shedules/edit/" + schedule.id}>
                      <span className="ActionIcon editAction">
                        <i className="bi bi-pencil-square"></i>
                      </span>
                    </Link>
                    <span className="ActionIcon deleteAction">
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

export default ScheduleList;
