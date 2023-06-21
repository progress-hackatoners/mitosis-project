import * as React from "react";

function Colgroup(props) {
  return (
    <colgroup>
      {props.cols?.map((col) => (
        <col width={col} />
      ))}
    </colgroup>
  );
}

export default Colgroup;
