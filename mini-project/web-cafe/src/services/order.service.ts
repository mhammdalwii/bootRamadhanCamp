import { environment } from "../constants/environment";
import fetchAPI from "../utils/fetch";
import { getLocalStorage } from "../utils/localStorages";

export const getOrders = async () => {
  const url = `${environment.API_URL}/orders?page=1&pageSize=10`;
  const result = await fetchAPI(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`,
    },
  }).then((data) => data);
  return result;
};

export const getOrderById = async (id: string) => {
  const url = `${environment.API_URL}/orders${id}`;

  const result = await fetchAPI(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`,
    },
  }).then((data) => data);
  return result;
};

export const updateOrder = async (id: string, payload: { status: string }) => {
  const result = await fetchAPI(`${environment.API_URL}/orders/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return result;
};
