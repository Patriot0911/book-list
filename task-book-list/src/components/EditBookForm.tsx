import { useRef } from 'react';
import { putBook } from '../scripts/fetchTools';
import { IBookInfo, IEditBookFormProps, IFormsItems } from '../types';
import GeneralForm from './GeneralForm';

export default function EditBookForm({ book }: IEditBookFormProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLInputElement>(null);

    const itemsList: IFormsItems[] = [
        {
            name: 'Title',
            value: book.title,
            refer: titleRef
        },
        {
            name: 'Author',
            value: book.author,
            refer: authorRef
        },
        {
            name: 'Category',
            value: book.cat,
            refer: categoryRef
        }
    ];

    const submitHandle = () => {
        const newBook: IBookInfo = {
            ...book,
            title: titleRef.current!.value,
            author: authorRef.current!.value,
            cat: categoryRef.current?.value ? categoryRef.current?.value : 'None',
            edited: new Date().toLocaleDateString()
        };
        putBook(newBook);
    };

    return (
        <GeneralForm
            title={'Book Edit'}
            inputItems={itemsList}
            submitHandle={submitHandle}
        />
    );
};