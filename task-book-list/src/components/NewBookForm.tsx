import { useRef } from 'react';
import { postBook } from '../scripts/fetchTools';
import { INewBookInfo } from '../types';
import FormInput from './FormInput';
import './NewBookForm.css';

export default function NewBookForm() {
    const titleRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLInputElement>(null);

    const submitHandle = () => {
        const newBook: INewBookInfo = {
            title: titleRef.current!.value,
            author: authorRef.current!.value,
            cat: categoryRef.current?.value ? categoryRef.current?.value : 'None'
        };
        postBook(newBook);
    };

    return (
        <form
            className={'book-form-container'}
            onSubmit={submitHandle}
        >
            <h1>New Book Form</h1>
            <FormInput
                name={'Title'}
                ref={titleRef}
            />
            <FormInput
                name={'Author'}
                ref={authorRef}
            />
            <FormInput
                name={'Category'}
                ref={categoryRef}
            />
            <button
                type={'submit'}
                className={'form-submit-button'}
            >
                Submit
            </button>
        </form>
    );
};