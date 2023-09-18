import { IBookTableProps } from "../types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function BookTable({ books }: IBookTableProps) {
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
                            {...item}
                        />
                    )
                }
            </tbody>
        </table>
    );
};