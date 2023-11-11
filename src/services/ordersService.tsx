import axios from "axios";
import { DeleteOrder, OrderRequest } from "../utils/interfeces/@Types";

const baseUrl = "http://localhost:8080";

export const setOrder = (order: OrderRequest) => {
  return axios
    .post(`${baseUrl}/order`, order, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log("Response:", res.data);
      return res;
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error("Error:", error);
    });
};

export const deleteOrder = (deleteProps: DeleteOrder) => {
  return axios
    .delete(`${baseUrl}/order`, {
      data: deleteProps,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log("Response:", res.data);
      return res;
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error("Error:", error);
      throw error; // Re-throw the error to propagate it to the calling code
    });
  }
  
const ordersService = {
  setOrder,
  deleteOrder,
};

export default ordersService;
