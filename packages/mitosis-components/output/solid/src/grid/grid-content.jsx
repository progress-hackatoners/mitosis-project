import Colgroup from "./colgroup.jsx";

function GridContent(props) {
  return (
    <div class="k-grid-content">
      <table class={tableClasses}>
        <Colgroup cols={props.colgroup}></Colgroup>
        <tbody class="k-table-tbody">
          {props.children}
          <tr class="k-table-row">
            <td class="k-table-td">1</td>
            <td class="k-table-td">Row</td>
          </tr>
          <tr class="k-table-row k-table-alt-row k-alt">
            <td class="k-table-td">2</td>
            <td class="k-table-td">Alt row</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GridContent;
