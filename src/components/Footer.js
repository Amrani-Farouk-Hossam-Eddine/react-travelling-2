import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-slate-100">
      <div className="max-w-[1140px] px-4 py-16 m-auto ">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-32 items-end justify-center">
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-center lg:text-left m-2">
              BEACHES.
            </h2>
            <ul className="flex">
              <li>About</li>
              <li>Partnership</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-center text-[var(--primary-dark)]">
              <FaFacebook size={25} className="m-4" />
              <FaTwitter size={25} className="m-4" />
              <FaInstagram size={25} className="m-4" />
              <FaPinterest size={25} className="m-4" />
              <FaYoutube size={25} className="m-4" />
            </div>
            <ul className="flex justify-center items-center">
              <li>Home</li>
              <li>Destinitions</li>
              <li>Travel</li>
              <li>Views</li>
              <li>Book</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
