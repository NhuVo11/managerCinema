import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TicketService from "../../../service/TicketService";
import "./editTicket.css";

function EditTicket() {
  let { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    if (id) {
      getTicket(id);
    }
  }, [id]);

  const getTicket = (id) => {
    TicketService.get(id)
      .then((res) => {
        setTicket(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {ticket ? (
        <div>
          <h2>Update Ticket</h2>
          <form className="newForm">
            <div className="newItem">
              <label> Price:</label>
              <input
                type="text"
                placeholder="20"
                required
                value={ticket.price}
              />
            </div>
            <div className="newItem"></div>
            <button className="newButton">Create</button>
            <Link
              to={"/shedules/" + id + "/tickets"}
              className="newButton cancel"
            >
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

export default EditTicket;
