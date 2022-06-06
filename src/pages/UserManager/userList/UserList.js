import React from "react";
import "./userList.css";

function UserList() {
  return (
    <div className="userList">
      <h2>UserList</h2>
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>
              <span className="btn btn-success">+</span>
            </th>
            <th>#</th>
            <th>id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input type="checkbox" />
            </td>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
