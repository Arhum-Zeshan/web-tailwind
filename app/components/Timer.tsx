import { Heading1 } from "lucide-react";
import React, { useState, useEffect } from "react";

const Timer = () => {

  const [seconds, setSeconds] = useState(0);
  const [runStatus, setRunStatus] = useState(false);


  const reset = () => {
    setRunStatus(false);
    setSeconds(0);
  };
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (runStatus) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      
    }

    return () => clearInterval(interval);
  }, [runStatus]);

  return (
    <div>
      <h1>{runStatus? "running":"notRunning" }</h1>
      <button
        onClick={() => setRunStatus(!runStatus)}
        className={`mt-6 px-6 py-2 border ${!runStatus?"bg-green-400":"bg-red-400"} border-white text-white font-medium hover:bg-white hover:text-black transition duration-300`}
      >
       {runStatus? "Stop":"Start" }
      </button>
   
      <button
        onClick={reset}
        className="mt-6 px-6 py-2 border  bg-blue-300 border-white text-white font-medium hover:bg-white hover:text-black transition duration-300"
      >
        reset
      </button>
    </div>
  );
};

export default Timer;
