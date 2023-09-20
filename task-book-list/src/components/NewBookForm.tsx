import { useRef } from 'react';
import { postBook } from '../scripts/fetchTools';
import { IFormsItems, INewBookInfo } from '../types';
import GeneralForm from './GeneralForm';

export default function NewBookForm() {
    const titleRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLInputElement>(null);

    const itemsList: IFormsItems[] = [
        {
            name: 'Title',
            refer: titleRef
        },
        {
            name: 'Author',
            refer: authorRef
        },
        {
            name: 'Category',
            refer: categoryRef
        }
    ];

    const submitHandle = () => {
        const newBook: INewBookInfo = {
            title: titleRef.current!.value,
            author: authorRef.current!.value,
            cat: categoryRef.current?.value ? categoryRef.current?.value : 'None'
        };
        postBook(newBook);
    };

    return (
        <GeneralForm
            title={'New Book'}
            inputItems={itemsList}
            submitHandle={submitHandle}
        />
    );
};