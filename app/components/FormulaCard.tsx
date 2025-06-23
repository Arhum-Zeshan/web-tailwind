import React from 'react';

type FormulaCardProps = {
  title: string;
  formula: string;
  description: string;
  example: string;
  gradient: string;
};

const FormulaCard= ({ title, formula, description, example, gradient }:FormulaCardProps) => (
  <div className="bg-white shadow-md rounded-xl p-6 w-full md:w-[450px]">
    <div className={`rounded-md p-4 text-white font-semibold ${gradient}`}>
      <h2 className="text-lg">{title}</h2>
      <p className="text-2xl mt-2">{formula}</p>
    </div>
    <p className="text-gray-700 mt-4">{description}</p>
    <p className="italic text-gray-500 mt-2 text-sm">Example: {example}</p>
  </div>
);

const AllCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-6 ">
      <FormulaCard
        title="Celsius to Fahrenheit"
        formula="°F = (°C × 9/5) + 32"
        description="Multiply Celsius by 9/5 and add 32"
        example="28.7°C = (28.7 × 9/5) + 32 = 83.66°F"
        gradient="bg-gradient-to-r from-blue-500 to-blue-400"
      />
      <FormulaCard
        title="Fahrenheit to Celsius"
        formula="°C = (°F - 32) × 5/9"
        description="Subtract 32 from Fahrenheit and multiply by 5/9"
        example="83.66°F = (83.66 - 32) × 5/9 = 28.7°C"
        gradient="bg-gradient-to-r from-red-500 to-red-400"
      />
    </div>
  );
};

export default AllCards;
