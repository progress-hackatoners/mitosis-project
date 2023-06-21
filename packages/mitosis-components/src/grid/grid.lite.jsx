import { Show } from '@builder.io/mitosis';
import Colgroup from './colgroup.lite';

export default function Grid(props) {
  return (
    <div className="k-grid">
      <Show when={props.slotToolbar}>
        <div className="k-grid-toolbae shtot sym mnogo qk">
          {props.slotToolbar}
        </div>
      </Show>
      <Colgroup cols={props.colgroup}></Colgroup>
      {props.children}
    </div>
  );
}
