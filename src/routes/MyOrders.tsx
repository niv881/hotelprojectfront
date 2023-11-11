import React, { useEffect, useState } from "react";
import axios from "axios";
import { Order, DeleteOrder } from "../utils/interfeces/@Types";
import ordersService from "../services/ordersService";

const MyOrders: React.FC = () => {
  const userData = localStorage.getItem("user") ?? `{token:''}`;
  //parse
  const user = JSON.parse(userData);
  const username = user.username;

  const [orders, setOrders] = useState<Order[]>([]);
  const [refreshFlag, setRefreshFlag] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/order/order_details",
          {
            params: { userName: username },
          }
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [username,refreshFlag]);

  const deleteOrder = async (orderNumber: string, roomType: string, hotelName: string) => {
    const deleteProps: DeleteOrder = {
      orderNum: orderNumber,
      roomType: roomType,
      hotelName: hotelName,
    };
    try{
       await ordersService.deleteOrder(deleteProps)
      setRefreshFlag((prev)=>!prev);
    }catch(error){

    }

  };

  return (
    <div className="dark:text-white ">
      <h1 className="text-center m-5 text-2xl">Order Details : </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
        {orders.map((order, index) => (
          <div key={index} className="order-container">
            <div className="bg-white/20  dark:bg-gray-700/50 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-50 hover:border-black hover:border-2 transition-colors duration-300">
              <div className="order-index">
                <strong> order Number : {order.orderNumber}</strong>
              </div>
              <div className="hotel-info">
                <strong>Hotel:</strong> {order.hotel.name}, {order.hotel.rating}{" "}
                stars
              </div>
              <div className="room-info">
                <strong>Room:</strong> {order.room.type}, {order.room.capacity}{" "}
                person(s), ${order.room.price}/night
              </div>
              <div className="user-info">
                <strong>User:</strong> {order.user.username}, {order.user.email}
              </div>
              <div>
                <strong>Check-in:</strong> {order.checkIn},{" "}
                <strong>Check-out:</strong> {order.checkOut}
              </div>
              <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4"></div>
              <button
                onClick={() => deleteOrder(order.orderNumber, order.room.type, order.hotel.name)}
                className="bg-gray-950 dark:bg-gray-300 text-gray-400 border dark:text-gray-950  border-gray-400 dark:border-gray-950 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 dark:hover:brightness-90 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-gray-400 dark:bg-gray-950 shadow-gray-400 dark:shadow-gray-950 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
