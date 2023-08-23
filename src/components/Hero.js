import Video from "../assets/beachVid.mp4";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-[100vh] mt-[-80px]">
      <video
        src={Video}
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
      ></video>
      <div className="w-full h-full absolute top-0 left-0 bg-black/30"></div>
      <div className="absolute max-w-[270px] sm:max-w-[600px] w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto z-5 text-center text-white">
        <h2 className="text-2xl sm:text-4xl font-bold">First Class Travel</h2>
        <p className="py-4 font-bold text-xl sm:text-2xl">
          Top 1% Locations WorldWide
        </p>
        <motion.form
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full bg-white p-2 flex flex-col sm:flex-row justify-between rounded-md"
        >
          <input type="text" placeholder="Search Destinations" />
          <button className="rounded-md grid place-content-center">
            <FaSearch />
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Hero;
