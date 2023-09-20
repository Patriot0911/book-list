import { Link } from 'react-router-dom';
import { IActionButtonProps } from '../types';

export default function ActionButton (props: IActionButtonProps) {
    return (
        <Link
            onClick={
                props.callback && props.callback
            }
            style={
                props.color ?
                {
                    backgroundColor: `${props.color}`
                } : {}
            }
            className={'action-button'}
            to={
                props.path ? props.path : '/'
            }
        >
            {props.name}
        </Link>
    );
};