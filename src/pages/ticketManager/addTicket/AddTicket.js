import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TicketService from "../../../service/TicketService";
import "./addTicket.css";

function AddTicket() {
  let { id } = useParams();

  const [price, setPrice] = useState("");

  let navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();

    const ticket = {
      price: price,
    };

    console.log(price, id);

    TicketService.create(id, ticket)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error + "m");
      });
    alert(`Bạn đã thêm giá vé thành công và quay về trang danh sách lịch vé`);
    navigate("/shedules/" + id + "/tickets");
  };
  return (
    <div className="addTicket">
      <h2>New Ticket</h2>
      <form className="newForm">
        <div className="newItem">
          <label> Price:</label>
          <input
            type="text"
            placeholder="20"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="newItem"></div>
        <button className="newButton" onClick={(e) => handleAdd(e)}>
          Create
        </button>
        <Link to={"/shedules/" + id + "/tickets"} className="newButton cancel">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default AddTicket;
