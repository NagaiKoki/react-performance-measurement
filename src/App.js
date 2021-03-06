import React, { useState, Profiler } from "react";
import Item from "./Item";

let num = 100;
const array = new Array(num).fill(null).map((_, i) => {
  return { id: i, name: `todo: ${i}` };
});

const logTimes = (id, phase, actualTime) => {
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual time: ${actualTime}`);
};

export const App = () => {
  const [text, setText] = useState("");

  return (
    <Profiler id="react-pf" onRender={logTimes}>
      <div style={{ padding: "30px" }}>
        <h1 style={{ marginBottom: "20px" }}>Performance measurement</h1>
        <input onChange={(e) => setText(e.target.value)} />
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            listStyle: "none",
            padding: 0,
          }}
        >
          {array.map((item) => {
            return (
              <li style={{ margin: 10 }} key={item.id}>
                <Item name={item.name} />
              </li>
            );
          })}
        </ul>
      </div>
    </Profiler>
  );
};
