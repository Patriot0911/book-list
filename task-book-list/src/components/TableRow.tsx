import {
    IActionButtonProps,
    IActionListProps,
    IBookInfo
} from '../types';
import './TableRow.css';

export default function TableRow(book: IBookInfo) {
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
                    book={book}
                />
            </td>
        </tr>
    );
};
function ActionsList({ book }: IActionListProps) {

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
            />
        </div>
    );
};
function ActionButton (props: IActionButtonProps) {
    return (
        <button
            onClick={props.callback && props.callback}
            style={props.color ? {color: `${props.color}`} : {}}
            className={'action-button'}
        >
            {props.name}
        </button>
    );
};