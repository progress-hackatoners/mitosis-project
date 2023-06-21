import { Fragment, Slot, component$, h, useStore } from "@builder.io/qwik";

export const GridContentRow = component$((props) => {
  const state = useStore({
    rowClasses: props.alt ? `k-table-row k-table-alt-row k-alt` : `k-table-row`,
  });

  return (
    <tr class={state.rowClasses}>
      <Slot></Slot>
    </tr>
  );
});

export default GridContentRow;
