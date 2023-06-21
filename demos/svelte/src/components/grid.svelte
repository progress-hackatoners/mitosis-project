<script>
    import BaseGrid from '../../../../packages/mitosis-components/output/svelte/src/grid/grid.svelte'
	import GridHeader from '../../../../packages/mitosis-components/output/svelte/src/grid/grid-header.svelte'
	import GridHeaderCell from '../../../../packages/mitosis-components/output/svelte/src/grid/grid-header-cell.svelte'
    import GridContent from '../../../../packages/mitosis-components/output/svelte/src/grid/grid-content.svelte'
    import GridContentRow from '../../../../packages/mitosis-components/output/svelte/src/grid/grid-content-row.svelte'
    import GridContentCell from '../../../../packages/mitosis-components/output/svelte/src/grid/grid-content-cell.svelte'


    export let items;
    export let columns;

    let colgroup = columns.map((i) => i.width);
</script>

<BaseGrid >
    <GridHeader slot="gridheader" colgroup={colgroup} size="md">
        {#each columns as col}
            <GridHeaderCell>
                { col.title || col.field }
            </GridHeaderCell>
        {/each }
    </GridHeader>
    <GridContent slot="gridcontent" colgroup={colgroup} size="md">
        {#each items as item, i}
            <GridContentRow alt={i % 2 === 0}>
                {#each columns as col}
                    <GridContentCell>
                        { item[col.field] }
                    </GridContentCell>
                {/each }
            </GridContentRow>
        {/each }
    </GridContent>
</BaseGrid>