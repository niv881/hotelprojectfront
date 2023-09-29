import React from "react";
import { Room } from "../utils/interfeces/@Types";

interface RoomCardProps {
  closeModal: () => void; // Define the new prop
  rooms: Room[]; // Assuming Room is defined somewhere in your code
}

const RoomCard: React.FC<RoomCardProps> = ({ closeModal, rooms }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal">
        <div className="modal-content">
          {/* Close Button */}
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
          <div>
          {rooms.map((room: Room) => (
            <div
              key={room.id}
              className=" bg-gray-300 border mb-4 border-gray-300 rounded-lg shadow dark:bg-slate-500 dark:border-gray-500"
            >
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {room.type}
                </h5>
                <p className="dark:text-white">only {room.capacity} room left!</p>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {room.price.toLocaleString()}$
                  </span>
                  <button
                    type="submit"
                    className="bg-green-700 dark:bg-green-400 dark:text-black dark:font-bold font-bold text-white p-4 ms-5 rounded-lg "
                  >
                    Make Reservations
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoomCard;
