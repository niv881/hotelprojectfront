import { createContext, ReactNode, useState, useEffect } from "react";
import { HotelRespone, HotelData } from "./interfeces/@Types";
import axios from "axios";

interface HotelContextState {
  hotels: HotelRespone[];
  setHotels: (hotels: HotelRespone[]) => void;
  setInputAddress : (address : string) => void;
  time : boolean;
}

const initialState: HotelContextState = {
  hotels: [],
  setHotels: () => { },
  setInputAddress: (address: string) => { },
  time: false
}

const HotelContext = createContext<HotelContextState>(initialState);

export const HotelContextProvider = ({ children }: { children: ReactNode }) => {
  const [hotels, setHotels] = useState<HotelRespone[]>([]);
  const [address,setAddress] = useState("eilat")
  const [time,settime] = useState(false)

  const setInputAddress = (address : string) => {
    setAddress(address)
  }

    
  useEffect(() => {
    fetchHotels();
    settime(true)
    const timer = setTimeout(()=>{
      settime(false)
    },2000)
    return() => {
      clearTimeout(timer)
    }
  }, [address]);

  const fetchHotels = async () => {
    try {
      const response = await axios.get<HotelData>(`http://localhost:8080/hotels_management/address?hotel_city=${address}`);
      const fetchedHotels = response.data.hotels;

      if (Array.isArray(fetchedHotels)) {
        setHotels(fetchedHotels);
      } else {
        console.error("Invalid hotel data format:", fetchedHotels);
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  return (
    <HotelContext.Provider value={{ hotels, setHotels, setInputAddress,time }}>
      {children}
    </HotelContext.Provider>
  );
};

export default HotelContext;


