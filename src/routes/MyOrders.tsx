import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface Order {
  checkIn: string;
  checkOut: string;
  roomCapacity: number;
  hotel: {
    id: number;
    name: string;
    about: string;
    email: string;
    phoneNumber: string;
    rating: number;
  };
  room: {
    id: number;
    type: string;
    price: number;
    capacity: number;
  };
  user: {
    id: number;
    username: string;
    email: string;
  };
}

const MyOrders: React.FC = () => {

    const userData = localStorage.getItem("user") ?? `{token:''}`;
    //parse
    const user = JSON.parse(userData);
    const username = user.username

  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8080/order/order_details', {
          params: { userName: username},
        });

        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []); // The empty dependency array ensures that the effect runs only once after the initial render

  return (
    <div>
      <h1>Order Details</h1>
      {orders.map((order, index) => (
        <div key={index} className="order-container">
          {/* Render order details here based on the Order interface */}
          <div className="hotel-info">
            <strong>Hotel:</strong> {order.hotel.name}, {order.hotel.rating} stars
          </div>
          <div className="room-info">
            <strong>Room:</strong> {order.room.type}, {order.room.capacity} person(s), ${order.room.price}/night
          </div>
          <div className="user-info">
            <strong>User:</strong> {order.user.username}, {order.user.email}
          </div>
          <div>
            <strong>Check-in:</strong> {order.checkIn}, <strong>Check-out:</strong> {order.checkOut}
          </div>
          {/* Add additional details as needed */}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
