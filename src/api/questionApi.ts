import HttpClient from "../utils/httpClient";

export const getQuestion = (query) => {
  return HttpClient.doGet("", query, null);
};