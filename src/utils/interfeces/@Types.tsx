import { AxiosHeaders, AxiosRequestConfig } from "axios";

export interface ClassName {
  background: string;
  drakMode: string;
}

export interface SpinnerProps {
  title?: string;
  className?: string;
}

export interface Title {
  title: string;
}

export interface Room {
  id: number;
  type: string;
  capacity: number;
  price: number;
}

export interface Rooms{
  rooms : Room[]
}

export interface address {
  id : number;
  city: string;
  country: string;
  street: string;
  streetNumber: string;
};

export interface HotelRespone {
  hotel: {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    rating: number;
    about: string;
  };
  address: {
    city: string;
    country: string;
    street: string;
    streetNumber: string;
  };
  images: Array<{ id: number; image: string }>;
  rooms: Room[];
}

export interface HotelData {
  hotels: HotelRespone[];
}

export interface Role{

}

export interface User {
  role: Array<{authority: string}>
  token: string;
  username: string;
}

interface HotelRequest {
  name: string;
  about: string;
  email: string;
  phoneNumber: string;
}

interface AddressRequest {
  street: string;
  country: string;
  city: string;
  streetNumber: string;
}

interface RoomRequest {
  type: string;
  price: number;
  capacity: number;
}

export interface PostHotel {
  hotel: HotelRequest;
  address: AddressRequest;
  rooms: RoomRequest[];
}

export interface HotelFormValues {
  hotelName: string;
  image: "";
 }


