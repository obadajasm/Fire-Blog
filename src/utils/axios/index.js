import axios from "axios";
import { addNotificationInterceptor } from "./axios-helpers";
import authHelper from "@/utils/auth-helper";

const axiosInstance = axios.create({
  baseURL: "https://api.realworld.io/api/",
  headers: {
    Authorization: `Bearer ${authHelper.getAccessToken()}`,
  },
});
const unauthenticatedAxiosInstance = axios.create({
  baseURL: "https://api.realworld.io/api/",
});

addNotificationInterceptor(axiosInstance);
addNotificationInterceptor(unauthenticatedAxiosInstance);

export { axiosInstance, unauthenticatedAxiosInstance };
