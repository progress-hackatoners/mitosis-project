import * as React from "react";
import { useState } from "react";
import Colgroup from "./colgroup";

function GridHeader(props) {
  const [tableClasses, setTableClasses] = useState(
    () => `k-table k-table-${props.size} k-grid-header-table`
  );

  return (
    <div className="k-grid-header">
      <div className="k-grid-header-wrap">
        <table className={tableClasses}>
          <Colgroup cols={props.colgroup} />

          <thead className="k-table-thead">
            <tr className="k-table-row">{props.children}</tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default GridHeader;
