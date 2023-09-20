import { createPortal } from 'react-dom';
import { deleteBook, putBook } from '../scripts/fetchTools';
import { IBookInfo, IBookTableProps } from '../types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { useState } from 'react';
import ModalContent from './ModalContent';

export default function BookTable({ books, setBooks }: IBookTableProps) {
    const [showModal, setShowModal] = useState(false);
    const deleteBookHandle = async (book: IBookInfo) => {
        if(book.activated) {
            setShowModal(true);
            return;
        }
        setBooks(books.filter(item => item.id !== book.id));
        deleteBook(book);
    };
    const changeBookActiveHandle = async (book: IBookInfo) => {
        const newBook = {
            ...book,
            activated: !book.activated
        };
        if(await putBook(newBook) === undefined)
            return;
        setBooks(books.map(item => {
            if(item.id !== book.id) {
                return item;
            }
            return newBook;
        }));
    };
    return (
        <>
            {
                showModal && createPortal(
                    <ModalContent
                        onClose={() => setShowModal(false)}
                        info={'You have to deactivate Book first'}
                    />,
                    document.body
                )
            }
            <table>
                <tbody>
                    <TableHeader
                        titles={
                            [
                                'ID', 'Title', 'Author',
                                'Cat', 'Created at', 'Edited at',
                                'Actions'
                            ]
                        }
                    />
                    {
                        books.length > 0 &&
                        books.map(
                            item =>
                            <TableRow
                                key={item.id}
                                book={item}
                                deleteBookHandle={deleteBookHandle}
                                changeBookActiveHandle={changeBookActiveHandle}
                            />
                        )
                    }
                </tbody>
            </table>
        </>
    );
};