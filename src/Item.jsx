import React, { memo } from "react";

const Item = ({ name }) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        padding: "1px 10px",
        background: "red",
        listStyle: "none",
      }}
    >
      <strong>{name}</strong>
    </div>
  );
};

export default memo(Item);
// export default Item;
