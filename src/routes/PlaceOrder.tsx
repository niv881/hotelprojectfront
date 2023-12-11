import  { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../utils/Button";
import Payment from "../components/Payment";
import { OrderRequest } from "../utils/interfeces/@Types";

const PlaceOrder = () => {
  const { hotelName, roomType, checkIn, checkOut,price } = useParams();
  const [showModal, setShowModal] = useState(false);
  const userData = localStorage.getItem("user") ?? `{token:''}`;
  //parse
  const user = JSON.parse(userData);
  const username = user.username
  

  if (hotelName === undefined || roomType === undefined || checkIn === undefined || checkOut === undefined || username === undefined) {
    return <div>Missing parameter(s)</div>;
  }

  const openPayment = () => {
    setShowModal(true);
  };

  const closePayment = () => {
    setShowModal(false);
  };
  const order : OrderRequest = {
    hotelName : hotelName,
    roomType :roomType,
    checkIn : checkIn,
    checkOut : checkOut,
    roomCapacity : 1,
    userName : username
  }

  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  // Calculate the time difference in milliseconds
  const timeDifference = checkOutDate.getTime() - checkInDate.getTime();

  // Convert the time difference to days
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  const totalPrice = daysDifference * Number(price);


  return (
    <div className="flex justify-center" >
      <div className=" w-full h-2/3 md:w-3/4 flex justify-center relative group cursor-pointer group overflow-hidden  text-gray-50  rounded-2xl hover:duration-700 duration-700">
        <div className="absolute bg-gray-50  w-3/5 h-full p-3 flex flex-col gap-1 top-full md:top-72 group-hover:top-0 group-hover:duration-600 duration-500">
          <span className="text-lime-500 font-bold text-lg ">Order Details : </span>
          <span className="text-gray-800 font-bold text-3xl">{hotelName}</span>
          <p className="text-neutral-800">
            Room Type : {roomType}
          </p>
          <p className="text-neutral-800">
           Check In :  {checkIn}
          </p>
          <p className="text-neutral-800">
           Check Out :  {checkOut}
          </p>
          <p className="text-neutral-800">
           Price :  {price}
          </p>
          <p className="text-neutral-800">
           totla :  {totalPrice}
          </p>
          <div >
          <Button onClick={openPayment} text="Move To Payment"/>
          </div>
        </div>
        <div className="w-full h-96 md:w-3/4 md:h-72  bg-slate-400  dark:bg-slate-800 text-slate-800 dark:text-slate-300 flex items-center justify-center  rounded-2xl "> To see your order hover me !
        </div>
      </div>
      {showModal && price && (
        <div>
          <Payment closePayment={closePayment} price={totalPrice} order={order}/>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
