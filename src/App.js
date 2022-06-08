import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/UserManager/userList/UserList";
import MovieList from "./pages/movieManager/movieList/MovieList";

import { Route, Routes } from "react-router-dom";
import MovieEdit from "./pages/movieManager/mobieEdit/MovieEdit";
import AddMovie from "./pages/movieManager/addMovie/AddMovie";
import RoomList from "./pages/RoomManager/roomList/RoomList";
import AddRoom from "./pages/RoomManager/addRoom/AddRoom";
import RoomEdit from "./pages/RoomManager/editRoom/RoomEdit";
import SeatList from "./pages/seatManager/seatList/SeatList";
import AddSeat from "./pages/seatManager/addSeatByRoom/AddSeat";
import EditSeat from "./pages/seatManager/editSeat/EditSeat";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="cotainer">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />

          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/edit/:id" element={<MovieEdit />} />
          <Route path="/movies/add" element={<AddMovie />} />

          <Route path="/rooms" element={<RoomList />} />
          <Route path="/rooms/edit/:id" element={<RoomEdit />} />
          <Route path="/rooms/add" element={<AddRoom />} />

          <Route path="/rooms/:id/seats" element={<SeatList />} />
          <Route path="/rooms/:id/seats/add" element={<AddSeat />} />
          <Route path="/seat/edit/:id" element={<EditSeat />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
