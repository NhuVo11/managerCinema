import http from "./http-common";

const getAll = (id) => {
  return http.get(`/rooms/${id}/seats`);
};
const get = (id) => {
  return http.get(`/seats/${id}`);
};
const create = (id, data) => {
  return http.post(`/rooms/${id}/seats`, data);
};
const SeatService = {
  getAll,
  get,
  create,
};

export default SeatService;
