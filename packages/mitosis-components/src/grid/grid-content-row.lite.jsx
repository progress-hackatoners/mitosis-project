export default function GridContentRow(props) {
    const state = useStore({
        rowClasses: props.alt ? `k-table-row k-table-alt-row k-alt` : `k-table-row`,
    });

    return (
        <tr className={state.rowClasses}>
            {props.children}
        </tr>
    );
}
