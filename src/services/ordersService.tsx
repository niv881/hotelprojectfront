import axios from "axios";
import {OrderRequest} from "../utils/interfeces/@Types";

const baseUrl = "http://localhost:8080";

export const setOrder = (order : OrderRequest) => {
    return axios.post(
        `${baseUrl}/order`,
        order,
{        headers: {
            'Content-Type': 'application/json',
          },}
    )  .then((res) => {
        console.log('Response:', res.data);
        return res;
    
      }).catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
}

const ordersService = {
    setOrder
}

export default ordersService;