import React from "react";

const SelectCard = ({ bg, text }) => {
  return (
    <div className="relative text-white">
      <img src={bg} alt="/" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      <h2 className="absolute z-10 left-3 bottom-3">{text}</h2>
    </div>
  );
};

export default SelectCard;
