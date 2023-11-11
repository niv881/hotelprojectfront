
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
import { useContext } from "react";
import DarkModeContext from "./utils/DarkModeContext";
import PlaceOrder from "./routes/PlaceOrder";
import MyOrders from "./routes/MyOrders";
import RegisterManager from "./routes/RegisterManager";

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  const appClass = darkMode ? 'App dark' : 'App';
  return (
    <div className={appClass}>
    <Navbar />
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerManager" element={<RegisterManager />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postHotel" element={<PostHotel/>} />
        <Route path="/postImageForHotel" element={<PostHotelImage/>} />
        <Route path="/myOrders" element ={<MyOrders/>}/>
        <Route path="/room/:hotelName/:roomType/:checkIn/:checkOut/:price" element={<PlaceOrder/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
