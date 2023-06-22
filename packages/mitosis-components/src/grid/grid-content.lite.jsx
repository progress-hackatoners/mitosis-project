import Colgroup from "./colgroup.lite";

export default function GridContent(props) {
    const state = useStore({
        tableClasses: `k-table k-table-${props.size} k-grid-header-table`,
    });

    return (
        <div className="k-grid-content">
            <div className="k-grid-table-wrap">
                <table className={state.tableClasses}>
                    <Colgroup cols={props.colgroup}></Colgroup>
                    <tbody className="k-table-tbody">
                        {props.children}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
