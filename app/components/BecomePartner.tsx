export default function BecomePartner() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-10 py-12 lg:py-20 bg-black text-white gap-10">
      {/* Image */}
      <div className="w-full max-w-sm sm:max-w-md lg:w-1/2 flex justify-center">
        <div className="overflow-hidden rounded-t-full transition-transform duration-500 hover:scale-105 shadow-lg shadow-gray-950 aspect-[2/3] w-full max-w-[400px]">
          <img
            src="https://picsum.photos/id/1011/600/900"
            alt="Desert Adventure"
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2 max-w-xl text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          BECOME <span className="text-[#FF9805]">PARTNER</span>
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-gray-300">
          Join Global Desert Adventure Dubai and offer thrilling desert
          experiences for families! Our exciting activities include buggy and
          quad rides, sandboarding, camel rides, and more, all set in the
          stunning Global Desert...
        </p>

        <button className="mt-6 px-6 py-2 border border-white text-white font-medium hover:bg-white hover:text-black transition duration-300">
          ↗ Book Now
        </button>
      </div>
    </div>
  );
}
