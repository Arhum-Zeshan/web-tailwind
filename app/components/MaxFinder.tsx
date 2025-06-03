import React, { useState } from 'react';

function DynamicInputs() {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="0">Select a number</option>
        {Array.from({ length: 46 }, (_, i) => (
          <option key={i + 5} value={i + 5}>
            {i + 5}
          </option>
        ))}
      </select>

      <div style={{ marginTop: '10px' }}>
        {Array.from({ length: count }, (_, i) => (
          <input key={i} type="text" placeholder={`Input ${i + 1}`} style={{ display: 'block', margin: '5px 0' }} />
        ))}
      </div>
    </div>
  );
}

export default DynamicInputs;
