import { Fragment, component$, h } from "@builder.io/qwik";

export const Colgroup = component$((props) => {
  return (
    <colgroup>
      {(props.cols || []).map(function (col) {
        return <col width={col} />;
      })}
    </colgroup>
  );
});

export default Colgroup;
