import Borabora from "../assets/borabora.jpg";
import Borabora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import Keywest from "../assets/keywest.jpg";
import SelectCard from "./SelectCard";
import { motion } from "framer-motion";

const Selects = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delyChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div id="travel" className="max-w-[1140px] w-full px-4 py-16 mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid gap-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
      >
        <SelectCard bg={Borabora} text="Borabora" />
        <SelectCard bg={Borabora2} text="Borabora2" />
        <SelectCard bg={Maldives} text="Maldives" />
        <SelectCard bg={Maldives2} text="Maldives2" />
        <SelectCard bg={Maldives3} text="Maldives3" />
        <SelectCard bg={Keywest} text="Maldives3" />
      </motion.div>
    </div>
  );
};

export default Selects;
