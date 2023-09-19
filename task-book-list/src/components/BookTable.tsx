import { changeActive } from "../scripts/fetchTools";
import { IBookInfo, IBookTableProps } from "../types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function BookTable({ books, setBooks }: IBookTableProps) {
    const changeBookActivatedHandle = async(book: IBookInfo) => {
        if(await changeActive(book) === undefined){
            return;
        }
        const newBooks = books.map(item => ({
            ...item,
            activated: item.id === book.id ? !item.activated : item.activated
        }));
        setBooks(newBooks);
    };

    return (
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
                            bookActivatedHandle={changeBookActivatedHandle}
                        />
                    )
                }
            </tbody>
        </table>
    );
};