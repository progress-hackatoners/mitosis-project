import Colgroup from "./colgroup.jsx";

function GridHeader(props) {
  return (
    <div class="k-grid-header">
      <div class="k-grid-header-wrap">
        <table class={tableClasses}>
          <Colgroup cols={props.colgroup}></Colgroup>
          <thead class="k-table-thead">
            <tr class="k-table-row">{props.children}</tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default GridHeader;
