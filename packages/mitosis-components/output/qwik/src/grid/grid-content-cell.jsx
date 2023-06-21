import { Fragment, Slot, component$, h } from "@builder.io/qwik";

export const GridContentCell = component$((props) => {
  return (
    <td class="k-table-td">
      <Slot></Slot>
    </td>
  );
});

export default GridContentCell;
