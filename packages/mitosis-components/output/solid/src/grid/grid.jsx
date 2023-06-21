import { Show } from "solid-js";

import Colgroup from "./colgroup.jsx";

function Grid(props) {
  return (
    <div class="k-grid">
      <Show when={props.slotToolbar}>
        <div class="k-grid-toolbae shtot sym mnogo qk">{props.slotToolbar}</div>
      </Show>
      <Colgroup cols={props.colgroup}></Colgroup>
      {props.children}
    </div>
  );
}

export default Grid;
