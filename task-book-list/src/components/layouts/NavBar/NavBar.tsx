import { Link } from "react-router-dom";
import { INavBarProps } from "../../../types";
import './Navbar.css';

export default function NavBar({ pages }: INavBarProps) {
    return (
      <ul className={'navBar'}>
        {
          pages.map((page, id) =>
            <li key={id}>
              <Link
                to={page.path}
                className={'nav-link'}
              >
                {page.name}
              </Link>
            </li>
          )
        }
      </ul>
    );
  };