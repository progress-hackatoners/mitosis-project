import * as React from "react";
import { useState } from "react";
import Colgroup from "./colgroup";

function GridContent(props) {
  const [tableClasses, setTableClasses] = useState(
    () => `k-table k-table-${props.size} k-grid-header-table`
  );

  return (
    <div className="k-grid-content">
      <div className="k-grid-table-wrap">
        <table className={tableClasses}>
          <Colgroup cols={props.colgroup} />

          <tbody className="k-table-tbody">{props.children}</tbody>
        </table>
      </div>
    </div>
  );
}

export default GridContent;
