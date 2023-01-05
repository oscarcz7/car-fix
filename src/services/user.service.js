import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/"; // TODO: replcae with the correct url

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getProviderBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const userService = {
  getPublicContent,
  getUserBoard,
  getProviderBoard,
  getAdminBoard,
};

export default userService;
