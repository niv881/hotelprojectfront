import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const FotterFa = () => {
  return (
    <div className="mt-6 lg:mb-0 mb-6">
      <button
        className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <i className="flex justify-center">
          <FaTwitter />
        </i>
      </button>
      <button
        className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <i className="flex justify-center">
          <IoLogoInstagram />
        </i>
      </button>
      <button
        className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <i className="flex justify-center">
          <FaFacebookF />
        </i>
      </button>
      <button
        className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <i className="flex justify-center">
          <FaTiktok />
        </i>
      </button>
    </div>
  );
};

export default FotterFa;
