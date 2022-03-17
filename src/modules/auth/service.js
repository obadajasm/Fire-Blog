import { unauthenticatedAxiosInstance } from "@/utils/axios";
import * as ep from "./endpoints";

export default class Service {
  static async login(qp = {}) {
    const res = await unauthenticatedAxiosInstance.post(ep.LOGIN, qp);
    return res.data;
  }

  static async signup(qp = {}) {
    const res = await unauthenticatedAxiosInstance.post(ep.SIGNUP, qp);
    return res.data;
  }
}
