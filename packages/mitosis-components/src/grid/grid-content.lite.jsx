import Colgroup from "./colgroup.lite";

export default function GridContent(props) {
    const tableClasses = `k-table k-table-${props.size} k-grid-table`;

    return (
        <div className="k-grid-content">
            <table className={tableClasses}>
                <Colgroup cols={props.colgroup}></Colgroup>
                <tbody className="k-table-tbody">
                    {props.children}
                    <tr className="k-table-row">
                        <td className="k-table-td">1</td>
                        <td className="k-table-td">Row</td>
                    </tr>
                    <tr className="k-table-row k-table-alt-row k-alt">
                        <td className="k-table-td">2</td>
                        <td className="k-table-td">Alt row</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
