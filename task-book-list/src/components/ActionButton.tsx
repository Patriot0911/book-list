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
            className={
                props.mobile ?
                'action-button' :
                'action-button big-screen'
            }
            to={
                props.path ? props.path : '/'
            }
        >
            {props.name}
        </Link>
    );
};