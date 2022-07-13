import axios from "axios";
import { HttpConfig } from "../api/httpConfig";

export default class HttpClient {
  static headers: any = {
    "Content-Type": "application/json",
  };

  /**@private*/
  static async doRequest(token = null) {
    if (token) {
      HttpClient.headers = {
        ...HttpClient.headers,
        "Accept-Language": "ru",
        Authorization: `Bearer ${token}`,
      };
    }
    return axios.create({
      headers: {
        ...HttpClient.headers,
      },
    });
  }

  static async doGet(url, params = {}, token) {
    return (await HttpClient.doRequest(token)).get(makeUrl(url), { params });
  }
  static async doGetBlob(url, params, token) {
    return (await HttpClient.doRequest(token)).get(makeUrl(url), {
      params,
      responseType: "blob",
    });
  }
  static async doGetBase(url, token) {
    return (await HttpClient.doRequest(token)).get(url);
  }

  static async doDeleteBase(url, token) {
    return (await HttpClient.doRequest(token)).delete(url);
  }

  // static doPost(url, data) {
  //     return HttpClient.doRequest(token).post(url, data);
  // }
  //
  static async doPost(url, data, token) {
    return (await HttpClient.doRequest(token)).post(makeUrl(url), data);
  }

  static async doPut(url, data, token) {
    return (await HttpClient.doRequest(token)).put(makeUrl(url), data);
  }

  static async doDelete(url, token) {
    return (await HttpClient.doRequest(token)).delete(makeUrl(url));
  }
}

function makeUrl(url) {
  return url.includes("http") ? url : `${HttpConfig.API_PATH}${url}`;
}

export function makeBaseUrl(url) {
  return url.includes("http") ? url : `${HttpConfig.BASE_URL}${url}`;
}
