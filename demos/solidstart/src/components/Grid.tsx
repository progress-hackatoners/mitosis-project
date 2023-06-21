import { Index } from 'solid-js';
import {
  BaseGrid,
  GridHeader,
  GridHeaderCell,
  GridContent,
  GridContentRow,
  GridContentCell,
} from 'mitosis-components/solid';

export const Grid = (props: any) => {
  const colgroup = props.columns.map((i: any) => i.width);

  const gridHeader = (
    <GridHeader colgroup={colgroup} size="md">
      <Index each={props.columns}>
        {(col) => (
          <GridHeaderCell onClick={props.sort && props.sort(col)}>
            {col().title || col().field}
          </GridHeaderCell>
        )}
      </Index>
    </GridHeader>
  );

  const gridContent = (
    <GridContent colgroup={colgroup} size="md">
      <Index each={props.items}>
        {(item, i) => (
          <GridContentRow alt={i % 2 === 0}>
            <Index each={props.columns}>
              {(col) => (
                <GridContentCell>{item()[col().field]}</GridContentCell>
              )}
            </Index>
          </GridContentRow>
        )}
      </Index>
    </GridContent>
  );

  return (
    <BaseGrid
      slotGridHeader={gridHeader}
      slotGridContent={gridContent}
    ></BaseGrid>
  );
};
