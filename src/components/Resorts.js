import Borabora from "../assets/borabora.jpg";
import Borabora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import { motion } from "framer-motion";

const Resorts = () => {
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
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div
      id="destinitions"
      className="max-w-[1140px] w-full mx-auto py-10 px-4 text-center"
    >
      <h1 className="text-4xl font-bold">All-Inclusive Resorts</h1>
      <p className="py-4">On The Caribbean's Best Beachs</p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid sm:grid-cols-5 gap-3"
      >
        <motion.div
          variants={item}
          className="sm:col-span-3 col-span-2 row-span-2"
        >
          <img src={Borabora} alt="/" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div variants={item}>
          <img src={Borabora2} alt="/" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div variants={item}>
          <img src={Maldives} alt="/" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div variants={item}>
          <img src={Maldives2} alt="/" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div variants={item}>
          <img src={Maldives3} alt="/" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resorts;
