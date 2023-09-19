import { IBookInfo } from "../types";

const BASEURL = 'http://localhost:3000';

export const changeActive = async (book: IBookInfo) => {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...book,
            activated: !book.activated
        })
    };
    const response = await fetch(`${BASEURL}/books/${book.id}`, requestOptions);
    if(response.status !== 200) {
        return undefined;
    }
    const data = await response.json();
    return data;
};

/*

    const handlePost = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch(`${BASEURL}/books`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    };
*/