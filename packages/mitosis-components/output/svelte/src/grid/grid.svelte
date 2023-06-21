<div class="k-grid">
  {#if $$slots.toolbar}
    <slot name="toolbar" />
  {/if}
  <slot name="gridheader" />
  <slot name="gridcontent" />

  {#if $$slots.pager}
    <slot name="pager" />
  {/if}
</div>