import { motion } from "framer-motion";

const SelectCard = ({ bg, text }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div variants={item} className="relative text-white">
      <img src={bg} alt="/" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      <h2 className="absolute z-10 left-3 bottom-3">{text}</h2>
    </motion.div>
  );
};

export default SelectCard;
