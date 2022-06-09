import http from "./http-common";

const getAll = (id) => {
  return http.get(`/schedules/${id}/tickets`);
};
const get = (id) => {
  return http.get(`/tickets/${id}`);
};
const create = (id, data) => {
  return http.post(`/schedules/${id}/tickets`, data);
};
const TicketService = {
  getAll,
  get,
  create,
};

export default TicketService;
