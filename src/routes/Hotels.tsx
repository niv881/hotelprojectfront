import React, { useContext} from "react";
import Card from "../components/Card";
// import HotelCard from "../components/HotelCard";
import Home from "./Home";
import HotelContext from "../utils/HotelsContext";
import HotelCard from "../components/HotelCard";
import { HotelRespone} from "../utils/interfeces/@Types";
import Spinner from "../utils/Spinner";
import ErrorMsg from "../components/ErrorMsg";


const style = { background: "bg-green-200", drakMode: "bg-green-400" };
const errorMsg = "No Hotels to see in ower website for this city Name!"

const Hotels = () => {
  const { hotels, time } = useContext(HotelContext);

  return (
    <>
      <Home />
      {!time ? (
        hotels.length > 0 ? (
          <Card style={style}>
            <div className="w-full">
              {hotels.map((hotel: HotelRespone) => (
                <div key={hotel.hotel.id}>
                  <HotelCard
                    hotel={hotel.hotel}
                    address={hotel.address}
                    rooms={hotel.rooms}
                    images={hotel.images}
                  />
                </div>
              ))}
            </div>
          </Card>
        ) : (
          <ErrorMsg massage = {errorMsg}/>
        )
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Hotels;

