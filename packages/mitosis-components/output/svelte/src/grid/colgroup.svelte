<script>
  export let cols;
</script>

<colgroup>
  {#each cols as col}
    <col width={col} />
  {/each}
</colgroup>