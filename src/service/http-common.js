import axios from "axios";

const COURSE_API_URL = "http://localhost:8080/api";

export default axios.create({
  baseURL: COURSE_API_URL,
  headers: { "Content-type": "application/json" },
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
});
