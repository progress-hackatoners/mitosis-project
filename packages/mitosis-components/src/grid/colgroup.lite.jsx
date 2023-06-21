import { For } from '@builder.io/mitosis';

export default function Colgroup(props) {
  return (
    <colgroup>
      <For each={props.cols}>{(col) => <col width={col}></col>}</For>
    </colgroup>
  );
}
