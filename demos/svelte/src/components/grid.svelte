<script>
	import BaseGrid from '../../../../packages/mitosis-components/output/svelte/src/grid/grid.svelte';
	import GridHeader from '../../../../packages/mitosis-components/output/svelte/src/grid/grid-header.svelte';
	import GridHeaderCell from '../../../../packages/mitosis-components/output/svelte/src/grid/grid-header-cell.svelte';
	import GridContent from '../../../../packages/mitosis-components/output/svelte/src/grid/grid-content.svelte';
	import GridContentRow from '../../../../packages/mitosis-components/output/svelte/src/grid/grid-content-row.svelte';
	import GridContentCell from '../../../../packages/mitosis-components/output/svelte/src/grid/grid-content-cell.svelte';

	import { orderBy } from '@progress/kendo-data-query';

	export let items;
	export let columns;

	let colgroup = columns.map((i) => i.width);

	function sortByColumn(field) {
		items = orderBy(items, [{ field: field, dir: 'asc' }]);
	}
</script>

<BaseGrid>
	<GridHeader slot="gridheader" {colgroup} size="md">
		{#each columns as col}
			<GridHeaderCell aria-label="test">
				<span on:click={sortByColumn(col.field)}>
					{col.title || col.field}
				</span>
			</GridHeaderCell>
		{/each}
	</GridHeader>
	<GridContent slot="gridcontent" {colgroup} size="md">
		{#each items as item, i}
			<GridContentRow alt={i % 2 === 0}>
				{#each columns as col}
					<GridContentCell>
						{item[col.field]}
					</GridContentCell>
				{/each}
			</GridContentRow>
		{/each}
	</GridContent>
</BaseGrid>
