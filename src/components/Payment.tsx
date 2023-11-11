import React, { useState } from "react";
import Button from "../utils/Button";
import { BTNPaymentProp } from "../utils/interfeces/@Types";
import ordersService from "../services/ordersService";
import { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Payment = ({ closePayment, price, order }: BTNPaymentProp) => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    cus_name: "",
    cus_email: "",
    cus_address: "",
    cus_city: "",
    cus_country: "",
    cus_zip: "",
    cus_card: "",
  });
  console.log(order)
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    ordersService.setOrder(order).then((response) => {
      const axiosResponse = response as AxiosResponse;
      if (axiosResponse.status === 201) {
        Swal.fire({
          title: "Order successfully",
          icon: "success",
          timer: 4000,
        });
        nav("/");  
    }});
  };

  return (
    <div className="leading-loose fixed inset-0 flex items-center justify-center z-50">
      <div className="modal p-2 md:p-4 lg:p-6">
        <Button onClick={closePayment} text="Back" />

        <form
          className="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
          onSubmit={handleSubmit}
        >
          <p className="text-gray-800 font-medium">Customer information</p>
          <div>
            <label className="block text-sm text-gray-600" htmlFor="cus_name">
              Name
            </label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="cus_name"
              name="cus_name"
              type="text"
              required
              placeholder="Your Name"
              aria-label="Name"
              value={formData.cus_name}
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Email
            </label>
            <input
              className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              required
              placeholder="Your Email"
              aria-label="Email"
              value={formData.cus_email}
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <label
              className="block text-sm text-gray-600"
              htmlFor="cus_address"
            >
              Address
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_address"
              name="cus_address"
              type="text"
              required
              placeholder="Street"
              aria-label="Address"
              value={formData.cus_address}
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="cus_city">
              City
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_city"
              name="cus_city"
              type="text"
              required
              placeholder="City"
              aria-label="City"
              value={formData.cus_city}
              onChange={handleChange}
            />
          </div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <label
              className="block text-sm text-gray-600"
              htmlFor="cus_country"
            >
              Country
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_country"
              name="cus_country"
              type="text"
              required
              placeholder="Country"
              aria-label="Country"
              value={formData.cus_country}
              onChange={handleChange}
            />
          </div>
          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label className="block text-sm text-gray-600" htmlFor="cus_zip">
              Zip
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_zip"
              name="cus_zip"
              type="text"
              required
              placeholder="Zip"
              aria-label="Zip"
              value={formData.cus_zip}
              onChange={handleChange}
            />
          </div>
          <p className="mt-4 text-gray-800 font-medium">Payment information</p>
          <div>
            <label className="block text-sm text-gray-600" htmlFor="cus_card">
              Card
            </label>
            <input
              className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
              id="cus_card"
              name="cus_card"
              type="text"
              required
              placeholder="Card Number MM/YY CVC"
              aria-label="Card"
              value={formData.cus_card}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              type="submit"
            >
              {price} $
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
