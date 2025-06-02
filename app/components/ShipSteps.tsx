import React from 'react';
import { Check } from 'lucide-react';

export default function ShipSteps() {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10">
      
      {/* Card 1 */}
      <div className="relative group w-80 h-60 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500">
        <div className="absolute top-0 left-0 w-16 h-16 bg-[#F08522] rounded-br-full transition-transform duration-500 group-hover:scale-[7] origin-top-left z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <Check className="w-8 h-8 mb-4 text-black" />
          <h3 className="text-lg font-semibold mb-2">Express your interest</h3>
          <p className="text-sm text-black/80">
            Fill out the partnership form on our website to get started.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative group w-80 h-60 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500">
        <div className="absolute top-0 left-0 w-16 h-16 bg-[#F08522] rounded-br-full transition-transform duration-500 group-hover:scale-[7] origin-top-left z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <Check className="w-8 h-8 mb-4 text-black" />
          <h3 className="text-lg font-semibold mb-2">Let’s discuss</h3>
          <p className="text-sm text-black/80">
            Explore and decide on the partnership scheme that best suits your needs.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative group w-80 h-60 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500">
        <div className="absolute top-0 left-0 w-16 h-16 bg-[#F08522] rounded-br-full transition-transform duration-500 group-hover:scale-[7] origin-top-left z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <Check className="w-8 h-8 mb-4 text-black" />
          <h3 className="text-lg font-semibold mb-2">Set up the partnership</h3>
          <p className="text-sm text-black/80">
            Finalize and sign the partnership agreement so we can begin setting up the program.
          </p>
        </div>
      </div>

    </div>
  );
}
