import Colgroup from "./colgroup";

import { Fragment, Slot, component$, h } from "@builder.io/qwik";

export const GridHeader = component$((props) => {
  return (
    <div class="k-grid-header">
      <div class="k-grid-header-wrap">
        <table class={tableClasses}>
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
