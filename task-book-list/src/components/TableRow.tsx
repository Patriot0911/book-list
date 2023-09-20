import { ITableRowProps } from '../types';
import ActionsList from './ActionsList';
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