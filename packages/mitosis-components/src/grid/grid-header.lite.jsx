import Colgroup from "./colgroup.lite";

export default function GridHeader(props) {
    const tableClasses = `k-table k-table-${props.size} k-grid-header-table`;

    return (
        <div className="k-grid-header">
            <div className="k-grid-header-wrap">
                <table className={tableClasses}>
                    <Colgroup cols={props.colgroup}></Colgroup>
                    <thead className="k-table-thead">
                        <tr className="k-table-row">
                            {props.children}
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}
