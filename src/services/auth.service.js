import axios from "axios";

// API for develomnet {BaseURl}
//TODO: Update this with the correct endo point and configure in external document
const API_URL = "http://localhost:8080/api/auth/";

/**
 * 
 * @param {*} username 
 * @param {*} email 
 * @param {*} password 
 * @returns 
 */
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

/**
 * 
 */
const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;