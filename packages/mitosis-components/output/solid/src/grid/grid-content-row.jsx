import { createSignal } from "solid-js";

function GridContentRow(props) {
  const [rowClasses, setRowClasses] = createSignal(
    props.alt ? `k-table-row k-table-alt-row k-alt` : `k-table-row`
  );

  return <tr class={rowClasses()}>{props.children}</tr>;
}

export default GridContentRow;
