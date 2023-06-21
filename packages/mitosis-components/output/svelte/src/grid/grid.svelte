<script>
  import Colgroup from "./colgroup.svelte";

  export let colgroup;
</script>

<div class="k-grid">
  {#if $$slots.toolbar}
    <div class="k-grid-toolbae shtot sym mnogo qk">
      <slot name="toolbar" />
    </div>
  {/if}
  <Colgroup cols={colgroup} />
  <slot />
</div>