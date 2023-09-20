import { useSearchParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { useEffect, useState } from 'react';
import { fetchBook } from '../../scripts/fetchTools';
import { IBookInfo } from '../../types';
import NewBookForm from '../../components/NewBookForm';
import './BooksAction.css';

const PAGETITLE = 'Books Managing';

export default function BooksAction() {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [book, setBook] = useState<IBookInfo | null>(null);

    useTitle(PAGETITLE);

    useEffect(() => {
        const bookId = searchParams.get('bookid');
        if(!bookId) {
            setLoading(false);
            return;
        };
        const fetchBookInfo = async() => {
            const fetchedBook = await fetchBook(bookId);
            if(!fetchedBook) {
                setLoading(false);
                return;
            }
            setBook(fetchedBook as IBookInfo);
            setLoading(false);
        };
        fetchBookInfo();
    }, []);

    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                (
                    book ?
                    <EditBook /> :
                    <NewBookForm />
                )
            }
        </>
    );
};

function EditBook(){
    return (
        <>
            EditBook!
        </>
    );
};