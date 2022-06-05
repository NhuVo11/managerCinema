import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import MovieList from "./pages/movieList/MovieList";

import { Route, Routes } from "react-router-dom";

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
