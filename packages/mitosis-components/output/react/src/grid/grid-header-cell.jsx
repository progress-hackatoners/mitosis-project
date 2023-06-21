import * as React from "react";

function GridHeaderCell(props) {
  return (
    <th className="k-table-th k-header">
      <span className="k-cell-inner">
        <span className="k-link">
          <span className="k-column-title">{props.children}</span>
        </span>
      </span>
    </th>
  );
}

export default GridHeaderCell;
