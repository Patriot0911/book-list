import { ITableHeaderProps } from '../types';

export default function TableHeader({ titles }: ITableHeaderProps) {
    return (
        <tr>
            {
                titles.map((item, id) => <th key={id}>{item}</th>)
            }
        </tr>
    );
};