import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SeatService from "../../../service/SeatService";
import "./seatList.css";

function SeatList() {
  let { id } = useParams();
  const [seats, setSeats] = useState(null);

  useEffect(() => {
    console.log(id);
    if (id) {
      getAllSeat(id);
    }
  }, [id]);

  const getAllSeat = (id) => {
    SeatService.getAll(id)
      .then((res) => {
        setSeats(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      {seats ? (
        <div className="seatList">
          <h2>Seat list</h2>
          <table className="table table-condensed">
            <thead>
              <tr>
                <th>
                  <Link to={"/rooms/" + id + "/seats/add"}>
                    <span className="btn btn-success">+</span>
                  </Link>
                </th>
                <th>id</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {seats
                ? seats.map((seat) => (
                    <tr key={seat.id} className="roomAction">
                      <td></td>
                      <td>{seat.id}</td>
                      <td>{seat.name}</td>
                      <td>{seat.status ? "đã đặt" : "chưa đặt"}</td>
                      <td>
                        <Link to={"/seat/edit/" + seat.id}>
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
      ) : (
        <div>empty room</div>
      )}
    </>
  );
}

export default SeatList;
