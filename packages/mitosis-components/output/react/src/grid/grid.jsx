import * as React from "react";
import Colgroup from "./colgroup";

function Grid(props) {
  return (
    <div className="k-grid">
      {props.slotToolbar ? (
        <>
          <div className="k-grid-toolbae shtot sym mnogo qk">
            {props.slotToolbar}
          </div>
        </>
      ) : null}

      <Colgroup cols={props.colgroup} />

      {props.children}
    </div>
  );
}

export default Grid;
