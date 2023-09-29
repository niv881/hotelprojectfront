import React, { useContext, useState } from "react";
import Card from "../components/Card";
import FormAddress from "../components/Form";
import PageTitle from "../components/PageTitle";
import DatepickerC from "../components/DatePickerC";
import HotelContext from "../utils/HotelsContext";
import { useNavigate } from "react-router-dom";



const style = { background: "bg-green-200", drakMode: "bg-green-400" };


const Home = () => {
  const nav = useNavigate();
  const {setInputAddress} = useContext(HotelContext)
  const [dateCheckIn, setDateChackIn] = useState("");
  const [dateCheckOut, setDateCheckOut] = useState("");

  const setCheckIn = (p: string) => {
    setDateChackIn(p);
  };
  const setChecOut = (p: string) => {
    setDateCheckOut(p);
  };

  const getInputAddress = (address : string) => {
      if(address){
        setInputAddress(address)
        nav("/hotels")
      }else{
        <p>No valid !!</p>
      }
  }


  return (
    <>
      <Card style={style}>
        <DatepickerC check="check In" date={setCheckIn} />
        <DatepickerC check="check Out" date={setChecOut} />
        <FormAddress address ={getInputAddress} />
      </Card>
      <PageTitle title={`${dateCheckIn} , ${dateCheckOut}`} />
    </>
  );
};

export default Home;
