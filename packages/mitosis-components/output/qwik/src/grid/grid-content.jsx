import Colgroup from "./colgroup";

import { Fragment, Slot, component$, h, useStore } from "@builder.io/qwik";

export const GridContent = component$((props) => {
  const state = useStore({
    tableClasses: `k-table k-table-${props.size} k-grid-header-table`,
  });

  return (
    <div class="k-grid-content">
      <table class={state.tableClasses}>
        <Colgroup cols={props.colgroup}></Colgroup>
        <tbody class="k-table-tbody">
          <Slot></Slot>
        </tbody>
      </table>
    </div>
  );
});

export default GridContent;
