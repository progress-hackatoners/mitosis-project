<script>
  import Colgroup from "./colgroup.svelte";

  export let size;
  export let colgroup;

  let tableClasses = `k-table k-table-${size} k-grid-header-table`;
</script>

<div class="k-grid-header">
  <div class="k-grid-header-wrap">
    <table class={tableClasses}>
      <Colgroup cols={colgroup} />
      <thead class="k-table-thead">
        <tr class="k-table-row">
          <slot />
        </tr>
      </thead>
    </table>
  </div>
</div>