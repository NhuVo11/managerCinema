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
import ListMovie from "./pages/scheduleManager/listMovie/ListMovie";
import ScheduleList from "./pages/scheduleManager/scheduleList/ScheduleList";
import AddSchedule from "./pages/scheduleManager/addSchedule/AddSchedule";
import EditSchedule from "./pages/scheduleManager/editSchedule/EditSchedule";
import TicketList from "./pages/ticketManager/ticketsList/TicketList";
import AddTicket from "./pages/ticketManager/addTicket/AddTicket";
import EditTicket from "./pages/ticketManager/editTicket/EditTicket";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="cotainer">
        <Sidebar />
        <Routes>
          {/* User router */}
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />

          {/* movies router */}
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/edit/:id" element={<MovieEdit />} />
          <Route path="/movies/add" element={<AddMovie />} />

          {/* rooms router */}
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/rooms/edit/:id" element={<RoomEdit />} />
          <Route path="/rooms/add" element={<AddRoom />} />

          {/* seats router */}
          <Route path="/rooms/:id/seats" element={<SeatList />} />
          <Route path="/rooms/:id/seats/add" element={<AddSeat />} />
          <Route path="/seat/edit/:id" element={<EditSeat />} />

          {/* schdule router */}
          <Route path="/moviesList" element={<ListMovie />} />
          <Route path="/moviesList/:id/shedules" element={<ScheduleList />} />
          <Route
            path="/moviesList/:id/shedules/add"
            element={<AddSchedule />}
          />
          <Route path="/shedules/edit/:id" element={<EditSchedule />} />

          {/* tickets router */}
          <Route path="/shedules/:id/tickets" element={<TicketList />} />
          <Route path="/schedules/:id/tickets/add" element={<AddTicket />} />
          <Route path="/tickets/edit/:id" element={<EditTicket />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
