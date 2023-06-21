export default function GridContentRow(props) {
    const rowClasses = props.alt ? `k-table-row k-table-alt-row k-alt` : `k-table-row`;

    return (
        <tr className={rowClasses}>
            {props.children}
        </tr>
    );
}
