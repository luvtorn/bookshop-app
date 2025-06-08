import axios from "axios";

export const api = axios.create({
  baseURL: "https://bookshop-app-oda9.vercel.app/api",
});