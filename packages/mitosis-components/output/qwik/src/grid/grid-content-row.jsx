import { Fragment, Slot, component$, h } from "@builder.io/qwik";

export const GridContentRow = component$((props) => {
  return (
    <tr class={rowClasses}>
      <Slot></Slot>
    </tr>
  );
});

export default GridContentRow;
