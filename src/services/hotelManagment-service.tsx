import axios, { AxiosRequestConfig } from "axios";
import { HotelFormValues, PostHotel } from "../utils/interfeces/@Types";

const baseUrl = "http://localhost:8080";

export const postHotel = (hotel: PostHotel) => {

    const userData = localStorage.getItem("user") ?? `{token:''}`;
    //parse
    const user = JSON.parse(userData);
    //get the token from the user:
    const token = user.token;

    return axios
  .post(
    `${baseUrl}/hotels_management/create_new_hotel`,
     hotel ,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Replace with your actual access token
        // You can also add other headers here if needed
        'Content-Type': 'application/json',
      },
    }
  )
  .then((res) => {
    console.log('Response:', res.data);
    return res;

  }).catch((error) => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
  }

  export const PostImage = (values : HotelFormValues) => {
    const userData = localStorage.getItem("user") ?? `{token:''}`;
    //parse
    const user = JSON.parse(userData);
    //get the token from the user:
    const token = user.token;
    console.log(`hotel name : ${values.hotelName} , hotel image : ${values.image} `   )
    const formData = new FormData()
    formData.append('hotel_name',values.hotelName)
    if( values.image !=null){
    formData.append('image',values.image)
    }
    console.log(formData)
    return axios
  .post(
    `${baseUrl}/hotel_Image/upload_image`,formData,{
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    }
  )
  .then((res) => {
    console.log('Response:', res.data);
    return res;

  }).catch((error) => {
    console.error('Error12324:', error);
  });
  }

  export const GetInputAddress = () => {
    return axios.get(
      `${baseUrl}/all_address`
    ).then((res)=>{
      return res.data
    }).catch((error)=>{
      console.log(error)
    })
  }

const hotelManagmentService = {
  postHotel,
  PostImage,
  GetInputAddress
};

export default hotelManagmentService;
