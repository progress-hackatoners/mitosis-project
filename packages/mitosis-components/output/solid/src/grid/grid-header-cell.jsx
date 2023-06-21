function GridHeaderCell(props) {
  return (
    <th class="k-table-th k-header" {...props}>
      <span class="k-cell-inner">
        <span class="k-link">
          <span class="k-column-title">{props.children}</span>
        </span>
      </span>
    </th>
  );
}

export default GridHeaderCell;
