import React from 'react';

const GridHoverSingle = (props: { imgId?: number; price?: string }) => {
  const { imgId = 1011, price = '1.399,00 AED' } = props;
  return (
    <div className="w-full sm:w-[48%] md:w-[32%] lg:w-[25%] flex-grow group-hover:flex-grow-0 hover:flex-grow transition-all duration-500 relative overflow-hidden rounded-lg">
      <img
        src={`https://picsum.photos/id/${imgId}/600/400`}
        alt="Dune Buggy Dubai"
        className="w-full h-48 sm:h-64 md:h-72 object-cover"
      />
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="font-bold text-lg">Dune Buggy Dubai</h2>
        <span className="bg-white text-gray-800 px-2 py-1 mt-1 inline-block text-sm rounded">
          {price}
        </span>
      </div>
    </div>
  );
};

const gridItems = [
  { imgId: 1011, price: "1.399,00 AED" },
  { imgId: 1015, price: "1.500,00 AED" },
  { imgId: 1016, price: "1.500,00 AED" },
  { imgId: 1020, price: "1.550,00 AED" },
  { imgId: 1022, price: "1.600,00 AED" },
  { imgId: 1021, price: "1.600,00 AED" },
];

const GridHoverMultiple = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 group bg-black px-20">
      {gridItems.map((item, index) => (
        <GridHoverSingle key={index} {...item} />
      ))}
    </div>
  );
};

export { GridHoverSingle, GridHoverMultiple };
