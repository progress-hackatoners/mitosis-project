import { Show } from '@builder.io/mitosis';
import GridHeader from './grid-header.lite';

export default function Grid(props) {
  return (
    <div className="k-grid">
      <Show when={props.slotToolbar}>
        {props.slotToolbar}
      </Show>
      {props.slotGridHeader}
      {props.slotGridContent}
      <Show when={props.slotPager}>
        {props.slotPager}
      </Show>
    </div>
  );
}
