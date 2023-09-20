import { IBookInfo, INewBookInfo } from '../types';

const BASEURL = 'http://localhost:3000';

export const fetchBook = async (bookId: string) => {
    const response = await fetch(`${BASEURL}/books/${bookId}`);
    if(response.status !== 200) {
        return undefined;
    }
    const data = await response.json();
    return data;
};

export const putBook = async (book: IBookInfo) => {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    };
    const response = await fetch(`${BASEURL}/books/${book.id}`, requestOptions);
    if(response.status !== 200) {
        return undefined;
    }
    const data = await response.json();
    return data;
};

export const postBook = async (book: INewBookInfo) => {
    const newBook: Omit<IBookInfo, 'id'> = {
        ...book,
        activated: false,
        created: new Date().toLocaleDateString(),
        edited: '--'
    };
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    };
    const response = await fetch(`${BASEURL}/books`, requestOptions);
    const data = await response.json();
    console.log(data);
};

export const deleteBook = async (book: IBookInfo) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch(`${BASEURL}/books/${book.id}`, requestOptions);
    if(response.status !== 200) {
        return undefined;
    }
    const data = await response.json();
    return data;
};