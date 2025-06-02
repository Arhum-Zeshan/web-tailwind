import { Divide } from "lucide-react";
import React from "react";

const FamilyCardsLeft = () => {
  return (
    <div className="bg-black text-white py-12 px-4 space-y-20 pt-40">
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-6xl w-full">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Group/family day out Can-Am X3
            </h2>
            <hr className="w-96 border-[#FF9805] border-1" />
            <p className="text-sm md:text-base text-white">
              Embark on an exhilarating ride through our desert playground in a
              4-seater buggy. The Can-Am X3 offers an adrenaline-pumping
              experience for Dad, while ensuring a safe journey for Mom to
              enjoy. This buggy roller-coaster will leave Brothers craving for
              more, and the stunning dunes and landscapes will transport Sisters
              to a world of wonder. This unforgettable experience is perfect for
              the entire family!
            </p>
            <div className="flex flex-col gap-2 text-sm text-[#FF9805]">
  <span>👥 Seats: 1-4</span>
  <span>⏱️ Time: 60min-90min-120min</span>
</div>

            <p className="text-3xl font-semibold text-white">AED 200</p>
            <button className="px-5 py-2 bg-[#FF9805] text-black rounded-full font-semibold transition transform hover:bg-yellow-600 hover:scale-105">
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

const FamilyCardsRight = () => {
  return (
    <div className="bg-black text-white py-12 px-4 space-y-20 pt-40">
      <div className="flex justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 max-w-6xl w-full">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold ">
              Early Bird – Family/Group
            </h2>
            <hr className="w-1/2 border-[#FF9805] border-1" />
            <p className="text-sm md:text-base text-white">
              Embark on an exhilarating ride through our desert playground in a
              4-seater buggy. This early bird experience offers a thrilling
              adventure for Dad, while ensuring a safe and enjoyable ride for
              Mom. The buggy roller-coaster will leave Brothers wanting more,
              and the stunning dunes and landscapes will captivate Sisters in a
              world of wonder. This unforgettable experience is perfect for the
              entire family!
            </p>
            <div className="flex flex-col gap-2 text-sm text-[#FF9805]">
              <span>👥Seats: 1–2 </span>
              <span>⏱️ Time: 60min-90min-120min</span>
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
export { FamilyCardsLeft, FamilyCardsRight };
