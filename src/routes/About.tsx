import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="flex-col items-center justify-center  3xl:mt-[-150px] ">
      <div className="flex-1 flex flex-col items-center m-10">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg lg:w-1/2 text-center">
          Welcome to LookingApp, where luxury meets affordability in the heart
          of our commitment to social responsibility. At LookingApp, we believe
          in making travel accessible to everyone without compromising on
          comfort and quality. Our mission is to redefine the hospitality
          industry by providing the cheapest hotel options while contributing
          positively to society. As a socially conscious hotel company,
          LookingAppis dedicated to creating a positive impact on the
          communities we serve. We understand that travel is not just about
          finding a place to stay, it's about fostering connections and
          contributing to the well-being of the local community.
        </p>
        <div className="flex ">
          <NavLink
            to="/home"
            className="bg-blue-500 flex items-center text-center text-white px-4 py-2 mt-4 ms-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Start Now !
          </NavLink>
          <NavLink
            to="/home"
            className="bg-blue-500 text-center text-white px-4 py-2 mt-4 ms-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Hotel Manager ? <p>Click Here !</p>
          </NavLink>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          className="rounded-lg bg-black"
          src="assets/Looking-removebg-preview.png"
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default About;
