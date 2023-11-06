import React, { useState } from "react";
import { HotelResponeModalProps } from "../utils/interfeces/@Types";
import RoomCard from "./RoomCard";
import Button from "../utils/Button";

const HotelModal = ({
  closeModal,
  hotel,
  address,
  rooms,
  images,
  dateCheckIn,
  dateCheckOut,
}: HotelResponeModalProps & { dateCheckIn: string; dateCheckOut: string }) => {
  const [showModal, setShowModal] = useState(false);

  const openRoomModal = () => {
    setShowModal(true);
  };

  const closeRoomModal = () => {
    setShowModal(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal p-2 md:p-4 lg:p-6">
        <div className="modal-content shadow-lg rounded-lg overflow-hidden">
          <Button onClick={closeModal} text="Back" />

          <section className="max-w-xs mx-auto bg-slate-300 md:max-w-md lg:max-w-4xl">
            {images.length > 0 && (
              <img
                className="h-48 md:h-64 md:w-full object-contain mx-auto max-w-full"
                src={`data:image/png;base64,${images[0].image}`}
                alt={hotel.name}
              />
            )}
            {!(images.length > 0) && (
              <img
                className="h-48 md:h-64 md:w-full object-contain mx-auto"
                src="https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"
                alt="no"
              />
            )}
            <div className="p-2 md:p-4 text-center">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-widest">
                {hotel.name}
              </p>

              <h2 className="mt-2 md:mt-6 font-black uppercase text-sm md:text-lg">
                <span className="mt-1 md:mt-2 block text-xs md:text-sm mb-3 md:mb-5">
                  {hotel.about}
                </span>
              </h2>

              <Button
                onClick={openRoomModal}
                text="To the hotel rooms press here"
              />
            </div>
          </section>
        </div>
      </div>
      {showModal && (
        <div>
          <RoomCard
            closeRoomModal={closeRoomModal}
            rooms={rooms}
            hotelName={hotel.name}
            dateCheckIn={dateCheckIn} // Pass dateCheckIn as a prop
            dateCheckOut={dateCheckOut} // Pass dateCheckOut as a prop
          />
        </div>
      )}
    </div>
  );
};

export default HotelModal;
