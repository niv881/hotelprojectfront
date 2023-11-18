import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import FormAddress from "../components/Form";
import DatepickerC from "../components/DatePickerC";
import HotelContext from "../utils/HotelsContext";
import { HotelRespone, address } from "../utils/interfeces/@Types";
import ErrorMsg from "../components/ErrorMsg";
import Spinner from "../utils/Spinner";
import HotelCard from "../components/HotelCard";
import { useLocation } from "react-router-dom";

const style = { background: "bg-green-200", drakMode: "bg-green-400" };
const errorMsg = "Error Occurred ! come back later 😄";

const Home = () => {
  const { setInputAddress, hotels, time } = useContext(HotelContext);
  const [dateCheckIn, setDateChackIn] = useState("");
  const [dateCheckOut, setDateCheckOut] = useState("");
  const [refreshKey, setRefreshKey] = useState(0); 
  const [cityOptions,setCityOptions] =useState<string[]>([])
  const location = useLocation();

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
  useEffect(() => {
    setRefreshKey((prevKey) => prevKey + 1);
  }, [location.pathname]);

  useEffect(() => {
    // Wait for cityOptions to be updated before using it
    if (cityOptions.length > 0) {
      const randomIndex = Math.floor(Math.random() * cityOptions.length);
      const randomCity = cityOptions[randomIndex];
      setInputAddress(randomCity);
      console.log('Randomly Picked City:', randomCity);
    } else {
      console.log('No city options available.');
    }
  }, [cityOptions]);

  return (
    <div key={refreshKey}>
      <Card style={style}>
        <DatepickerC check="check In" date={setCheckIn} />
        <DatepickerC check="check Out" date={setChecOut} />
        <FormAddress address={getInputAddress} setCityOptions={setCityOptions} />
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
    </div>
  );
};

export default Home;

