import http from "./http-common";

const getAll = (id) => {
  return http.get(`/movies/${id}/schedules`);
};
const get = (id) => {
  return http.get(`/schedules/${id}`);
};
const create = (id, roomId, data) => {
  return http.post(`/movies/${id}/rooms/${roomId}/schedules`, data);
};
const ScheduleService = {
  getAll,
  get,
  create,
};

export default ScheduleService;
