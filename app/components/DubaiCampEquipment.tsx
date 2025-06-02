import Image from 'next/image';

export default function DubaiCampEquipment() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-center">
      <h2 className="text-2xl font-bold mb-2">Our Dubai Desert Camp Equipment</h2>
      <p className="text-sm text-gray-600 mb-8">
        Unwind, Recharge and Uncraft your own adventure setting as you settle along and absorb the desert wind across these Desert Magic Dubai Tours setups.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-48">
            <Image src="https://picsum.photos/400/300?random=1" alt="Desert Camp BBQ" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mt-2 text-sm font-semibold">DESERT CAMP BBQ</div>
        </div>

        {/* Card 2 */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-48">
            <Image src="https://picsum.photos/400/300?random=2" alt="Outdoor Screen" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mt-2 text-sm font-semibold">OUTDOOR SCREEN</div>
        </div>

        {/* Card 3 */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-48">
            <Image src="https://picsum.photos/400/300?random=3" alt="Our Terrace" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mt-2 text-sm font-semibold">OUR TERRACE</div>
        </div>

        {/* Card 4 */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-48">
            <Image src="https://picsum.photos/400/300?random=4" alt="Place to Stay" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mt-2 text-sm font-semibold">PLACE TO STAY</div>
        </div>

        {/* Card 5 */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-48">
            <Image src="https://picsum.photos/400/300?random=5" alt="Football Events" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mt-2 text-sm font-semibold">FOOTBALL EVENTS</div>
        </div>

        {/* Card 6 */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-48">
            <Image src="https://picsum.photos/400/300?random=6" alt="Pool Table" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mt-2 text-sm font-semibold">POOL TABLE</div>
        </div>
         <div className="group relative rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-48">
            <Image src="https://picsum.photos/400/300?random=7" alt="Pool Table" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mt-2 text-sm font-semibold">BILLARD TABLES
</div>
        </div>
         <div className="group relative rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-48">
            <Image src="https://picsum.photos/400/300?random=8" alt="Pool Table" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mt-2 text-sm font-semibold">SOFA</div>
        </div>
         <div className="group relative rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-48">
            <Image src="https://picsum.photos/400/300?random=9" alt="Pool Table" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mt-2 text-sm font-semibold">PLAYSTATION
</div>
        </div>

      </div>
    </div>
  );
}
