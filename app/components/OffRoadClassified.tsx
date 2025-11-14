import Image from "next/image";


const OffRoadClassified = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap">
      <div className=" md:w-72 md:min-h-[500px] bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-[#ff9805] hover:text-white">
        <Image
          src="https://picsum.photos/id/1011/200/200"
          alt="Suzuki QuadSport Z400"
          className="  mx-auto rounded-full object-cover mb-4"
          width={100}
          height={100}
        />

        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
};
const OffRoadClassifiedall = () => {
  return (
    <div
      className="bg-cover bg-center p-12 flex flex-col sm:flex-row gap-5 justify-center "
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
    >
      <OffRoadClassified>
        <p>
          The <strong>Suzuki QuadSport Z400</strong> is a high-performance sport
          ATV designed for riders seeking a blend of power, agility, and
          durability. At its core is a 398cc liquid-cooled, 4-stroke, DOHC
          engine, delivering approximately 29.8 horsepower at 7,000 rpm and 23.7
          lb-ft of torque at 6,200 rpm. This engine configuration offers
          responsive acceleration and consistent power across various terrains.
          The Z400 features a 5-speed manual transmission with a reverse gear,
          providing versatility for both trail and sport riding.
        </p>
      </OffRoadClassified>
      <OffRoadClassified>
        <p>
          The <strong>Polaris Sportsman 570</strong> is one of the most
          versatile and capable ATVs in its class, built to handle everything
          from rugged trails to demanding work tasks. Powered by a reliable
          567cc ProStar engine, it delivers strong torque and smooth
          acceleration, making it ideal for both recreational adventures and
          utility purposes. Designed for rider comfort and functionality, it
          features a comfortable, ergonomic seat, easy-to-read digital display,
          and plenty of storage space.
        </p>
      </OffRoadClassified>
      <OffRoadClassified>
        <p>
          The <strong>Yamaha Raptor 700R</strong> is one of the most powerful
          and best-selling sport ATVs in the world, engineered for serious
          off-road enthusiasts who crave speed, control, and adrenaline. At the
          heart of this beast lies a potent 686cc liquid-cooled, fuel-injected,
          4-stroke engine that delivers massive torque and smooth power delivery
          across the entire RPM range. Whether you’re blasting through dunes,
          climbing rocky trails, or racing across open terrain, the Raptor 700R
          responds with unmatched intensity and reliability.
        </p>
      </OffRoadClassified>
    </div>
  );
};
const OffRoadClassifiedFamily = () => {
  return (
    <div
      className="bg-cover bg-center p-12 flex flex-col sm:flex-row gap-5 justify-center h-fit"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
    >
      <OffRoadClassified>
        <p>
          The <strong> Meyers Manx </strong> buggy is an iconic off-road vehicle
          that helped define the dune buggy culture of the 1960s and 70s.
          Originally designed by Bruce Meyers in 1964, the Meyers Manx was the
          first fiberglass dune buggy, built on a shortened Volkswagen Beetle
          chassis. Its lightweight construction, open-body design, and rugged
          suspension made it perfect for sand dunes, beaches, and rough terrain
          earning it a reputation as a fun, go-anywhere machine. The Meyers Manx
          represents a unique blend of vintage charm and pure fun.
        </p>
      </OffRoadClassified>
      <OffRoadClassified>
        <p>
          The <strong>Honda Talon 1000R </strong> is a powerhouse in the world
          of sport side-by-sides, engineered to conquer the toughest terrains
          with power, and durability. Designed for high-speed desert runs,
          rugged trails, and extreme off-road adventures, the Talon 1000R
          combines Honda’s legendary engineering with cutting-edge technology to
          deliver an exceptional off-road experience. Whether you’re a weekend
          warrior or an off-road veteran, the Honda Talon 1000R offers a perfect
          balance of raw power, responsive
        </p>
      </OffRoadClassified>
      <OffRoadClassified>
        <p>
          The <strong>VORRA Reno 500</strong> is a prominent off-road race organized by the
          Valley Off-Road Racing Association (VORRA), known for its challenging
          desert terrain and demanding course that tests the limits of both
          vehicles and drivers. One notable entry in this race was the
          custom-built Trophylite Race Truck developed by Marked Motorsports.
          This vehicle featured a 325-horsepower Honda engine, an 81-inch wide
          stance, and a 110-inch wheelbase, designed to provide stability and
          performance across the rugged landscape.
        </p>
      </OffRoadClassified>
    </div>
  );
};
export { OffRoadClassified, OffRoadClassifiedall, OffRoadClassifiedFamily };
