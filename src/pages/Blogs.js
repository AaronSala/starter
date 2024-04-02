import { useState, useEffect } from "react";

function Blogs() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
   let timed = setTimeout(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
      return()=>{clearTimeout(timed)}
  }, []);

    return <h1>Have rendere { timer} times</h1>;
}

export default Blogs;
