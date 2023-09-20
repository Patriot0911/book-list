import { ISelectMenuProps } from '../types';

const selectParams = [
    'all',
    'activated',
    'deactivated',
];

export default function SelectMenu({ dispatch }: ISelectMenuProps) {

    const dispatchHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: 'changeFilter',
            params: e.target.value.slice(5)
        });
    };

    return (
        <select onChange={dispatchHandle}>
            {
                selectParams.map((item, id) =>
                    <option key={id}>Show {item}</option>
                )
            }
        </select>
    );
};