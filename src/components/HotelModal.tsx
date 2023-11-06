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
}: HotelResponeModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const openRoomModal = () => {
    setShowModal(true);
  };

  const closeRoomModal = () => {
    setShowModal(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal">
        <div className="modal-content">
          <Button onClick={closeModal} text="Back" />
          <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 max-w-sm md:max-w-3xl bg-slate-300">
            {images.length > 0 && (
              <img
                className="h-64 md:h-full object-contain mx-auto max-w-full"
                src={`data:image/png;base64,${images[0].image}`}
                alt={hotel.name}
              />
            )}
            {!(images.length > 0) && (
              <img
                className="h-64 md:h-full object-contain mx-auto"
                src={`https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png`}
                alt="no "
              />
            )}
            <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest">
                {hotel.name}
              </p>

              <h2 className="mt-6 font-black uppercase">
                <span className="mt-2 block text-sm mb-5">{hotel.about}</span>
              </h2>

<Button onClick={openRoomModal} text="To the hotel rooms press here" />
            </div>
          </section>
        </div>
      </div>
      {showModal && (
        <div>
          <RoomCard closeRoomModal={closeRoomModal} rooms={rooms} />
        </div>
      )}
    </div>
  );
};

export default HotelModal;
