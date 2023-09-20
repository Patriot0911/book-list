import { IActionListProps } from '../types';
import ActionButton from './ActionButton';

export default function ActionsList({ book, deleteBookHandle, changeBookActiveHandle }: IActionListProps) {
    return (
        <div className={'action-buttons-container'}>
            <ActionButton
                name={'Edit'}
                path={`/books?bookid=${book.id}`}
            />
            <ActionButton
                name={'Delete'}
                callback={() => deleteBookHandle(book)}
            />
            <ActionButton
                name={
                    book.activated ? 'DeActivate' : 'ReActivate'
                }
                color={
                    book.activated ? 'green' : 'red'
                }
                callback={() => changeBookActiveHandle(book)}
            />
            <button className={'mobile-actions'}>Action</button>
        </div>
    );
};