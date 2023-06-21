import { Fragment, component$, h } from "@builder.io/qwik";

export const Grid = component$((props) => {
  return (
    <div class="k-grid">
      {props.slotToolbar ? <>{props.slotToolbar}</> : null}
      {props.slotGridHeader}
      {props.slotGridContent}
      {props.slotPager ? <>{props.slotPager}</> : null}
    </div>
  );
});

export default Grid;
