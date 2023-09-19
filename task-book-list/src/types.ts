import { ReactElement } from 'react';
import { IActions } from './scripts/filterReducer';

export interface INavBarProps {
  pages: IPagesList[];
};

export interface IPagesList {
  name: string;
  path: string;
  element: ReactElement;
};

export interface IBookInfo {
  id:         number;
  title:      string;
  author:     string;
  cat:        string;
  created:    Date;
  edited:     Date | string;
  activated:  boolean;
};

export interface IBookTableProps {
  books: IBookInfo[];
  setBooks: (books: IBookInfo[]) => void;
};

export interface ITableHeaderProps {
  titles: string[];
};

export type TLinks = {
  name:           string;
  link:           string;
};
export interface IFooterProps {
  links: TLinks[];
};

export interface IActionListProps {
  book: IBookInfo;
  bookActivatedHandle: (book: IBookInfo) => void;
};
export interface ITableRowProps {
  book: IBookInfo;
  bookActivatedHandle: (book: IBookInfo) => void;
}

export interface IActionButtonProps {
  name: string;
  callback?: () => void;
  color?: string;
};

export interface ILayoutProps {
  pagesList: IPagesList[];
  children: React.ReactNode;
};

export interface ISelectMenuProps {
  dispatch: React.Dispatch<IActions>;
};