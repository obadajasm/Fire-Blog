import { axiosInstance } from "@/utils/axios";
import * as ep from "./endpoints";

export default class Service {
  static async getTags() {
    let res = await axiosInstance.get(ep.TAGS);
    return res.data;
  }
}
