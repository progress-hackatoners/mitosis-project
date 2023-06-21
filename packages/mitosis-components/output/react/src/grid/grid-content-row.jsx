import * as React from "react";
import { useState } from "react";

function GridContentRow(props) {
  const [rowClasses, setRowClasses] = useState(() =>
    props.alt ? `k-table-row k-table-alt-row k-alt` : `k-table-row`
  );

  return <tr className={rowClasses}>{props.children}</tr>;
}

export default GridContentRow;
