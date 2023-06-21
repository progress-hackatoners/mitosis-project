import { For, createSignal, mergeProps } from 'solid-js';
import { BaseGrid } from 'mitosis-components/output/solid/src/grid';

export const Grid = (props: any) => {
  const [items, setItems] = createSignal([
    { name: 'Item 1', value: '1' },
    { name: 'Item 2', value: '2' },
    { name: 'Item 3', value: '3' },
    { name: 'Item 4', value: '4' },
  ]);

  const toolbar = (
    <div>
      <button
        onClick={() => {
          setColummns([
            { width: 200, field: 'name', title: 'Column' },
            { field: 'value', title: 'Column' },
          ]);
        }}
      >
        Click Me!
      </button>
    </div>
  );

  const [columns, setColummns] = createSignal([
    { width: 100, field: 'name', title: 'Column' },
    { field: 'value', title: 'Column' },
  ]);

  const mergedProps = mergeProps({ toolbar }, props);

  return (
    <BaseGrid colgroup={columns().map((i) => i.width)} {...mergedProps}>
      <For each={items()}>{(item) => <div>{item.name}</div>}</For>
    </BaseGrid>
  );
};
