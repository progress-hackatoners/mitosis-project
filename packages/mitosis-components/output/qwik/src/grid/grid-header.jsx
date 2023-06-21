import Colgroup from "./colgroup";

import { Fragment, Slot, component$, h, useStore } from "@builder.io/qwik";

export const GridHeader = component$((props) => {
  const state = useStore({
    tableClasses: `k-table k-table-${props.size} k-grid-header-table`,
  });

  return (
    <div class="k-grid-header">
      <div class="k-grid-header-wrap">
        <table class={state.tableClasses}>
          <Colgroup cols={props.colgroup}></Colgroup>
          <thead class="k-table-thead">
            <tr class="k-table-row">
              <Slot></Slot>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
});

export default GridHeader;
