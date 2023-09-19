import { useState, useEffect, useReducer } from 'react';
import { IBookInfo } from '../../types';
import BookTable from '../../components/BookTable';
import './Dashboard.css';
import useTitle from '../../hooks/useTitle';
import { filterReducer } from '../../scripts/filterReducer';
import getFetchUrl from '../../scripts/fetchBooksUrl';
import SelectMenu from '../../components/SelectMenu';

const PAGETITLE = 'Dashboard';

export default function Dashboard() {
    const [books, setBooks] = useState<null | IBookInfo[]>(null);
    const [state, dispatch] = useReducer(filterReducer, {
        search: '',
        activated: 'all'
    });

    useTitle(PAGETITLE);

    useEffect(() => {
        const fetchUrl = getFetchUrl(state);
        const abortController = new AbortController();

        fetch(fetchUrl)
        .then((res) => {
            res.json().then((data) => {
                const fetchedBooks = (data as IBookInfo[]);
                setBooks(fetchedBooks);
            });
        });

        return () => abortController.abort();
    }, [, state]);

    return (
        <div className={'dashboard-container'}>
            <input
                type={'text'}
                placeholder={'Search... (> 3 chars)'}
                onChange={(e) => dispatch({
                    type: 'changeSearch',
                    params: e.target.value
                })}
            />
            <SelectMenu
                dispatch={dispatch}
            />
            {
                !books ?
                <h2>Loading...</h2> :
                <BookTable
                    books={books}
                    setBooks={setBooks}
                />
            }
            {
                (books && books.length < 1)
                &&
                <h1>No results</h1>
            }
        </div>
    );
};