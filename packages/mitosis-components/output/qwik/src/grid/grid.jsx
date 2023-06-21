import Colgroup from "./colgroup";

import { Fragment, Slot, component$, h } from "@builder.io/qwik";

export const Grid = component$((props) => {
  return (
    <div class="k-grid">
      {props.slotToolbar ? (
        <div class="k-grid-toolbae shtot sym mnogo qk">{props.slotToolbar}</div>
      ) : null}
      <Colgroup cols={props.colgroup}></Colgroup>
      <Slot></Slot>
    </div>
  );
});

export default Grid;
