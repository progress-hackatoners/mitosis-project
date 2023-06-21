import { createSignal } from "solid-js";

import Colgroup from "./colgroup.jsx";

function GridContent(props) {
  const [tableClasses, setTableClasses] = createSignal(
    `k-table k-table-${props.size} k-grid-header-table`
  );

  return (
    <div class="k-grid-content">
      <table class={tableClasses()}>
        <Colgroup cols={props.colgroup}></Colgroup>
        <tbody class="k-table-tbody">{props.children}</tbody>
      </table>
    </div>
  );
}

export default GridContent;
