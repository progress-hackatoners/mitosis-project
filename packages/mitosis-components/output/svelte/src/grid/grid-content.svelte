<script>
  import Colgroup from "./colgroup.svelte";

  export let size;
  export let colgroup;

  let tableClasses = `k-table k-table-${size} k-grid-header-table`;
</script>

<div class="k-grid-content">
  <table class={tableClasses}>
    <Colgroup cols={colgroup} />
    <tbody class="k-table-tbody">
      <slot />
    </tbody>
  </table>
</div>