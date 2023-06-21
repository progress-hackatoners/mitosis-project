import * as React from "react";
import Colgroup from "./colgroup";

function GridHeader(props) {
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
