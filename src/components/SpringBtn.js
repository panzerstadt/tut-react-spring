import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Goo = () => {
  const [{ opacity }, set] = useSpring(() => ({ opacity: 1, config: slow }));
  const [toggle, setToggle] = useState(true);

  set({ opacity: toggle ? 1 : 0 });

  return (
    <>
      <animated.div
        style={{
          opacity: opacity,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px dashed salmon",
          margin: 30
        }}
      >
        wowee!!!
      </animated.div>
      <button onClick={() => setToggle(!toggle)}>press me</button>
    </>
  );
};

export default Goo;
