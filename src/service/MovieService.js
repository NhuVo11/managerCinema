import http from "./http-common";

const getAll = () => {
  return http.get("/movies");
};
const get = (id) => {
  return http.get(`/movies/${id}`);
};
const create = (data) => {
  return http.post("/movies", data);
};
const MovieService = {
  getAll,
  get,
  create,
};

export default MovieService;
