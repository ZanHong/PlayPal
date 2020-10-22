import axios from "axios";

export default {
  signUp: function (userData) {
    return axios.post("/api/user/signup", userData);
  },
  login: function (userData) {
    return axios.post("/api/user/login", userData)
  },
  getActivities: function () {
    return axios.get("/api/activities");
  },
  getUserById: function (id) {
    return axios.get("/api/user/" + id)
  }
}