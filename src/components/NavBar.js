import {
  FaSearch,
  FaUserAlt,
  FaBars,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 p-4 relative text-white z-10">
      <h1 className="text-4xl font-bold">Beaches.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="/">Home</a>
        </li>
        <li className="p-4">
          <a href="#destinitions">Destination</a>
        </li>
        <li className="p-4">
          <a href="#travel">Travel</a>
        </li>
        <li className="p-4">
          <a href="#views">Views</a>
        </li>
        <li className="p-4">
          <a href="#book">Book</a>
        </li>
      </ul>
      <div className="hidden md:flex">
        <FaSearch size={20} className="mr-2" />
        <FaUserAlt size={20} />
      </div>
      <div onClick={handleNav} className="block md:hidden">
        <FaBars size={20} />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "bolck md:hidden absolute top-0 left-0 overflow-x-hidden w-full bg-white text-black p-4 z-20 duration-1000 ease-in-out"
            : "absolute top-[-10000px] duration-500 ease-in-out h-screen left-0 w-full"
        }
      >
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Beaches.</h1>
          <AiOutlineClose size={30} />
        </div>
        <ul className="flex flex-col py-8 mx-4 font-bold text-xl">
          <li className="py-4 border-b-[2px] border-black">Home</li>
          <li className="py-4 border-b-[2px] border-black">Destination</li>
          <li className="py-4 border-b-[2px] border-black">Travel</li>
          <li className="py-4 border-b-[2px] border-black">Views</li>
          <li className="py-4 border-b-[2px] border-black">Book</li>
        </ul>
        <div className="flex flex-col mx-4">
          <button className="my-2 rounded-md">Search</button>
          <button className="my-2 rounded-md">Account</button>
        </div>
        <div className="py-8 flex justify-between items-center mx-4 text-[var(--primary-dark)]">
          <FaFacebook size={30} />
          <FaTwitter size={30} />
          <FaInstagram size={30} />
          <FaPinterest size={30} />
          <FaYoutube size={30} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
