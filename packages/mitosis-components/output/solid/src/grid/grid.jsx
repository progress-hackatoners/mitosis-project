import { Show } from "solid-js";

function Grid(props) {
  return (
    <div class="k-grid">
      <Show when={props.slotToolbar}>{props.slotToolbar}</Show>
      {props.slotGridHeader}
      {props.slotGridContent}
      <Show when={props.slotPager}>{props.slotPager}</Show>
    </div>
  );
}

export default Grid;
