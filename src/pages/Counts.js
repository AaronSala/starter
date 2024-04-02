import { useState, useEffect } from "react";
function Counts() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculaton] = useState(0);
  const [peny, setPeny] = useState(1);

  useEffect(() => {
    if (count > 0) {
      setCalculaton(count * 1); // Update calculation based on count
      if (count === 1) {
        // Check if this is the first click
        setPeny(1); // Update peny to 2 on first click
      } else {
        setPeny((prevPeny) => prevPeny * 2); // Otherwise, double peny
      }
    }
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>peny: {peny}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Start count</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default Counts;
