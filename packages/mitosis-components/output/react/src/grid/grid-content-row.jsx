import * as React from "react";

function GridContentRow(props) {
  return <tr className={rowClasses}>{props.children}</tr>;
}

export default GridContentRow;
