import { BrowserRouter } from 'react-router-dom';
import { ILayoutProps, TLinks } from '../../types';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

const footerLinks: TLinks[] = [
    {
        name: 'Github',
        link: 'https://github.com/Patriot0911'
    }
];

export default function Layout({ pagesList, children }: ILayoutProps) {
    return (
        <BrowserRouter>
            <NavBar pages={pagesList}/>
                {children}
            <Footer links={footerLinks}/>
        </BrowserRouter>
    );
};