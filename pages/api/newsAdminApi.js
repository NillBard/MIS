import { BASE_NEWS_URL } from "../../utils/constants";

const headers = {};
headers["Content-Type"] = "application/json";

export const createNews = async (newsData) => {
  const response = await fetch(`${BASE_NEWS_URL}`, {
    method: "POST",
    headers,
    body: JSON.stringify(newsData),
    credentials: "include",
  });
  const { data } = await response.json();
  return data;
};

export const updateImage = async (formData, newsId) => {
  const response = await fetch(`${BASE_NEWS_URL}/${newsId}/image`, {
    method: "PUT",
    body: formData,
    credentials: "include",
  });
};
