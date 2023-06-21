<script>
  export let alt;

  let rowClasses = alt ? `k-table-row k-table-alt-row k-alt` : `k-table-row`;
</script>

<tr class={rowClasses}>
  <slot />
</tr>