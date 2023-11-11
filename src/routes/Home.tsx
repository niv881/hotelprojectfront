import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import FormAddress from "../components/Form";
import DatepickerC from "../components/DatePickerC";
import HotelContext from "../utils/HotelsContext";
import { HotelRespone } from "../utils/interfeces/@Types";
import ErrorMsg from "../components/ErrorMsg";
import Spinner from "../utils/Spinner";
import HotelCard from "../components/HotelCard";

const style = { background: "bg-green-200", drakMode: "bg-green-400" };
const errorMsg = "Error Occurred ! come back later 😄";

const Home = () => {

  const { setInputAddress, hotels, time } = useContext(HotelContext);
  const [dateCheckIn, setDateChackIn] = useState("");
  const [dateCheckOut, setDateCheckOut] = useState("");
  
  const setCheckIn = (p: string) => {
    setDateChackIn(p);
  };
  const setChecOut = (p: string) => {
    setDateCheckOut(p);
  };

  const getInputAddress = (address: string) => {
    if (address) {
      setInputAddress(address);
    } else {
      <p>No valid !!</p>;
    }
  };
  


  return (
    <>
      <Card style={style}>
        <DatepickerC check="check In" date={setCheckIn} />
        <DatepickerC check="check Out" date={setChecOut} />
        <FormAddress address={getInputAddress} />
      </Card>
      
        {!time ? (
          hotels.length > 0 ? (
            <Card style={style}>
              <div className="w-full ">
                {hotels.map((hotel: HotelRespone) => (
                  <div key={hotel.hotel.id}>
                    <HotelCard
                      hotel={hotel.hotel}
                      address={hotel.address}
                      rooms={hotel.rooms}
                      images={hotel.images}
                      dateCheckIn={dateCheckIn} 
                      dateCheckOut={dateCheckOut} 
                    />
                  </div>
                ))}
              </div>
            </Card>
          ) : (
            <ErrorMsg massage={errorMsg} />
          )
        ) : (
          <Spinner />
        )}
      
    </>
  );
};

export default Home;
