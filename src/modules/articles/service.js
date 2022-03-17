import { axiosInstance, unauthenticatedAxiosInstance } from "@/utils/axios";
import * as ep from "./endpoints";

export default class Service {
  static async getArticlesFeed(qp = {}) {
    const res = await axiosInstance.get(ep.ARTICLES_FEED, { params: qp });
    return res.data;
  }

  static async getAllArticles(qp = {}) {
    const res = await unauthenticatedAxiosInstance.get(ep.ARTICLES, {
      params: qp,
    });
    return res.data;
  }

  static async createArticle(qp = {}) {
    const res = await axiosInstance.post(ep.ARTICLES, qp);
    return res.data;
  }

  static async getArticleBySlug(id, qp = {}) {
    const res = await unauthenticatedAxiosInstance.get(
      ep.ARTICLES_BY_SLUG(id),
      qp
    );
    return res.data;
  }
}
