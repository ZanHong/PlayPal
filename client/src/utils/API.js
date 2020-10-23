import axios from "axios";

export default {
  signUp: function (userData) {
    return axios.post("/api/user/signup", userData);
  },
  login: function (userData) {
    return axios.post("/api/user/login", userData)
  },
  logout: function () {
    return axios.get("/api/user/logout");
  },
  getActivities: function () {
    return axios.get("/api/activities");
  },
  getActivity: function (id) {
    return axios.get("/api/activities/" + id)
  },
  getActivityByCategory: function (category) {
    return axios.get("/api/activities/category/" + category)
  },
  createActivity: function (activityData) {
    return axios.post("/api/activities", activityData)
  },
  getUserById: function (id) {
    return axios.get("/api/user/" + id)
  }
}