import * as React from "react";

function Grid(props) {
  return (
    <div className="k-grid">
      {props.slotToolbar ? <>{props.slotToolbar}</> : null}

      {props.slotGridHeader}

      {props.slotGridContent}

      {props.slotPager ? <>{props.slotPager}</> : null}
    </div>
  );
}

export default Grid;
