import React from "react";
import { RoomCardProps , Room } from "../utils/interfeces/@Types";
import Button from "../utils/Button";



const RoomCard  = ({ closeRoomModal, rooms }: RoomCardProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal">
        <div className="modal-content">
       <Button onClick={closeRoomModal} text="Back" />
          <div>
            {rooms.map((room: Room) => (
              <div key = {room.id}className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500">
                <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-16 hover:before:translate-y-8 hover:before:-translate-x-16 hover:duration-500 after:absolute after:w-16 after:h-16 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-16 after:right-8 after:w-8 after:h-8 before:absolute before:w-12 before:h-12 before:bg-sky-400 before:rounded-full before:blur-xl before:top-8 before:right-8 before:w-8 before:h-8 hover:rotate-12 flex justify-center items-center h-32 w-48 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-4">
                  <div className="z-10 flex flex-col items-center gap-2">
                    <span className="text-slate-400  font-bold text-base">
                      {room.type}
                    </span>
                    <span className="text-slate-400 text-lg font-bold">
                      {room.price}
                    </span>
                    <p className="text-slate-400">only {room.capacity} left! </p>
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
