function GridHeaderCell(props) {
  return (
    <th class="k-table-th k-header">
      <span class="k-cell-inner">
        <span class="k-link">
          <span class="k-column-title">{props.children}</span>
        </span>
      </span>
    </th>
  );
}

export default GridHeaderCell;
