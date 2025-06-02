import { Divide } from "lucide-react";
import React from "react";

const QuadCardsLeft = () => {
  return (
    <div className="bg-black text-white py-12 px-4 space-y-20">
    

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-6xl w-full">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Dubai Quad Yamaha Raptor Kids (90cc)
            </h2>
            <hr className="w-1/2 border-[#FF9805] border-1" />
           
            <p className="text-sm md:text-base text-white pt-40">
              Experience the thrill of riding the Yamaha Raptor Kids 90cc Quad
              in the Dubai desert — an unforgettable adventure that your kids
              will love. Our quad bike tours are guided by pros who love desert
              adventures.
            </p>
            <div className="flex items-center gap-4 text-sm text-[#FF9805]">
              <span>👥 1–2 Seats</span>
              <span>⏱️ 60min–120min</span>
            </div>
            <p className="text-3xl font-semibold text-white">AED 200</p>
            <button className="px-5 py-2 bg-[#FF9805] text-black rounded-full font-semibold transition transform hover:bg-[#FF9805] hover:scale-105">
              Book Now
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/id/1015/800/600"
              alt="Dubai Quad Yamaha Raptor Kids"
              className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const QuadCardsRight = () => {
  return (
    <div className="bg-black text-white py-12 px-4 space-y-20 pt-40">
  <div className="flex justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 max-w-6xl w-full">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Dubai Quad Yamaha Raptor 700cc Manuel
            </h2>
            <hr className="w-1/2 border-[#FF9805] border-1" />
            
            <p className="text-sm md:text-base text-white pt-40">
              Experience the thrill of quad biking in the Dubai desert, an
              unforgettable adventure that you must not miss. Our quad bike
              tours in Dubai take place on a stunning stretch along the
              Dubai-Hatta road led by one of our experienced guides who are
              passionate about desert adventures.
            </p>
            <div className="flex items-center gap-4 text-sm text-[#FF9805]">
              <span>👥 1–2 Seats</span>
              <span>⏱️ 60min–120min</span>
            </div>
            <p className="text-3xl font-semibold text-white">AED 500</p>
            <button className="px-5 py-2 bg-[#FF9805] text-black rounded-full font-semibold transition transform hover:bg-[#FF9805] hover:scale-105">
              Book Now
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/id/1059/800/600"
              alt="Dubai Quad Yamaha Raptor 700cc"
              className="rounded-xl shadow-lg w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
      </div>
      
       );
};
export {QuadCardsLeft ,QuadCardsRight};
