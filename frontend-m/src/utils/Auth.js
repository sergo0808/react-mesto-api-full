import { config } from "./constants";

export const register = (email, password) => {
  return fetch(`${config.url}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    return data.json();
  });
};

export const authorize = (email, password) => {
  return fetch(`${config.url}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((data) => {
    return data.json();
  });
};

export const getContent = (token) => {
  return fetch(`${config.url}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
