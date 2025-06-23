import React from 'react';
import { FaSnowflake, FaHome, FaFire } from 'react-icons/fa';

type FactCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconBg: string;
  iconColor: string;
  title: string;
  temp: string;
  desc: string;
  cardBg: string;
  textColor: string;
};

const FactCard= ({ icon: Icon, iconBg, iconColor, title, temp, desc, cardBg,textColor }:FactCardProps) => {
  return (
    <div className={`rounded-xl p-5 w-full md:w-[280px] ${cardBg} shadow`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`rounded-full p-3 text-white ${iconBg}`}>
          <Icon className="text-lg" />
        </div>
        <h3 className={`font-semibold text-sm ${textColor}`}>{title}</h3>
      </div>
      <p className={`text-lg font-semibold  mb-1 ${textColor}`}>{temp}</p>
      <p className={`text-sm  leading-snug ${textColor}`}>{desc}</p>
    </div>
  );
};

const TemperatureFacts = () => {
  return (
    <div className="bg-white rounded-2xl py-10 px-4 shadow-lg">
      <h2 className="text-center text-xl font-bold text-gray-800 mb-8">Temperature Facts</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <FactCard
          icon={FaSnowflake}
          iconBg="bg-blue-500"
          iconColor="white"
          title="Water Freezes"
          temp="0°C = 32°F"
          desc="The temperature at which water turns to ice"
          cardBg="bg-blue-50"
          textColor='text-blue-700'
        />
        <FactCard
          icon={FaHome}
          iconBg="bg-green-500"
          iconColor="white"
          title="Room Temperature"
          temp="20°C = 68°F"
          desc="Comfortable indoor temperature for most people"
          cardBg="bg-green-50"
            textColor='text-green-700'  
        />
        <FactCard
          icon={FaFire}
          iconBg="bg-red-500"
          iconColor="white"
          title="Water Boils"
          temp="100°C = 212°F"
          desc="The temperature at which water turns to steam"
          cardBg="bg-red-50"
            textColor='text-red-700'
        />
      </div>
    </div>
  );
};

export default TemperatureFacts;
