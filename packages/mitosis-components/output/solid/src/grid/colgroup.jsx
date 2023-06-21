import { For } from "solid-js";

function Colgroup(props) {
  return (
    <colgroup>
      <For each={props.cols}>
        {(col, _index) => {
          const index = _index();
          return <col width={col} />;
        }}
      </For>
    </colgroup>
  );
}

export default Colgroup;
