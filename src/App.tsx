
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Hotels from "./routes/Hotels";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Navbar from "./components/Navbar";
import PostHotel from "./routes/PostHotel";
import PostHotelImage from "./routes/PostHotelImage";

const App = () => {



  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/postHotel" element={<PostHotel/>} />
        <Route path="/postImageForHotel" element={<PostHotelImage/>} />
      </Routes>
    </>
  );
};

export default App;
