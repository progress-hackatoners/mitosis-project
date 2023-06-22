import { createSignal } from "solid-js";

import Colgroup from "./colgroup.jsx";

function GridContent(props) {
  const [tableClasses, setTableClasses] = createSignal(
    `k-table k-table-${props.size} k-grid-header-table`
  );

  return (
    <div class="k-grid-content">
      <div class="k-grid-table-wrap">
        <table class={tableClasses()}>
          <Colgroup cols={props.colgroup}></Colgroup>
          <tbody class="k-table-tbody">{props.children}</tbody>
        </table>
      </div>
    </div>
  );
}

export default GridContent;
