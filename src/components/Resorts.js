import Borabora from "../assets/borabora.jpg";
import Borabora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";

const Resorts = () => {
  return (
    <div
      id="destinitions"
      className="max-w-[1140px] w-full mx-auto py-10 px-4 text-center"
    >
      <h1 className="text-4xl font-bold">All-Inclusive Resorts</h1>
      <p className="py-4">On The Caribbean's Best Beachs</p>
      <div className="grid sm:grid-cols-5 gap-3">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img src={Borabora} alt="/" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={Borabora2} alt="/" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={Maldives} alt="/" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={Maldives2} alt="/" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={Maldives3} alt="/" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Resorts;
