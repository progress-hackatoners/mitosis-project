import { Fragment, Slot, component$, h } from "@builder.io/qwik";

export const GridHeaderCell = component$((props) => {
  return (
    <th class="k-table-th k-header" {...props}>
      <span class="k-cell-inner">
        <span class="k-link">
          <span class="k-column-title">
            <Slot></Slot>
          </span>
        </span>
      </span>
    </th>
  );
});

export default GridHeaderCell;
