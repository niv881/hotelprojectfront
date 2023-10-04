
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./routes/About";
import Home from "./routes/Home";
import Login from "./routes/Login";
import PostHotel from "./routes/PostHotel";
import PostHotelImage from "./routes/PostHotelImage";
import Register from "./routes/Register";
import Footer from "./components/Footer";

const App = () => {



  return (
    <>
    <Navbar />
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postHotel" element={<PostHotel/>} />
        <Route path="/postImageForHotel" element={<PostHotelImage/>} />
      </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
