import useTitle from '../../hooks/useTitle';
import './BooksAction.css';

const PAGETITLE = 'Books Managing';


export default function BooksAction() {
    useTitle(PAGETITLE);
    return (
        <>
            BooksAction!
        </>
    );
};