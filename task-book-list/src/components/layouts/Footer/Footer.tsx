import './Footer.css'
import { IFooterProps } from '../../../types';

export default function Footer({ links }: IFooterProps) {
    return (
        <div className={'footer'}>
            {
                links && links.map(item =>
                    <a
                        href={item.link}
                        target={'_blank'}
                        className={'footer-link'}
                        key={item.name}
                    >
                        {item.name}
                    </a>
                )
            }
        </div>
    );
};