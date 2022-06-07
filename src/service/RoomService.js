import http from "./http-common";

const getAll = () => {
  return http.get("/rooms");
};
const get = (id) => {
  return http.get(`/rooms/${id}`);
};
const create = (data) => {
  return http.post("/rooms", data);
};
const RoomService = {
  getAll,
  get,
  create,
};

export default RoomService;
