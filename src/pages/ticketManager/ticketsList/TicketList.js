import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TicketService from "../../../service/TicketService";
import "./ticketList.css";

function TicketList() {
  let { id } = useParams();
  const [tickets, setTickets] = useState(null);

  useEffect(() => {
    console.log(id);
    if (id) {
      getAllTicket(id);
    }
  }, [id]);

  const getAllTicket = (id) => {
    TicketService.getAll(id)
      .then((res) => {
        setTickets(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="ticketList">
      <h2>Ticket List</h2>
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>
              <Link to={"/schedules/" + id + "/tickets/add"}>
                <span className="btn btn-success">+</span>
              </Link>
            </th>
            <th>id</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets
            ? tickets.map((ticket) => (
                <tr key={ticket.id} className="movieAction">
                  <td></td>
                  <td>{ticket.id}</td>
                  <td>{ticket.price} $</td>
                  <td>
                    <Link to={"/tickets/edit/" + ticket.id}>
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

export default TicketList;
