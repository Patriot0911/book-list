import {
    IActionButtonProps,
    IActionListProps,
    ITableRowProps
} from '../types';
import './TableRow.css';

export default function TableRow(props: ITableRowProps) {
    const { book } = props;
    return (
        <tr className={'table-content'}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.cat}</td>
            <td>{book.created.toString()}</td>
            <td>{book.edited.toString()}</td>
            <td>
                <ActionsList
                    {...props}
                />
            </td>
        </tr>
    );
};
function ActionsList({ book, bookActivatedHandle }: IActionListProps) {
    return (
        <div className={'action-buttons-container'}>
            <ActionButton
                name={'Edit'}
            />
            <ActionButton
                name={'Delete'}
            />
            <ActionButton
                name={
                    book.activated ? 'DeActivate' : 'ReActivate'
                }
                color={
                    book.activated ? 'green' : 'red'
                }
                callback={() => bookActivatedHandle(book)}
            />
            <button className={'mobile-actions'}>Action</button>
        </div>
    );
};
function ActionButton (props: IActionButtonProps) {
    return (
        <button
            onClick={props.callback && props.callback}
            style={props.color ? {backgroundColor: `${props.color}`} : {}}
            className={'action-button'}
        >
            {props.name}
        </button>
    );
};