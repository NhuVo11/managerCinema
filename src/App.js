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
        </Routes>
      </div>
    </div>
  );
}

export default App;
