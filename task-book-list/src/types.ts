import { ReactElement } from 'react';
import { IActions } from './scripts/filterReducer';

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
  created:    Date | string;
  edited:     Date | string;
  activated:  boolean;
};
export interface INewBookInfo {
  title: string;
  author: string;
  cat: string | 'None';
};
export type TLinks = {
  name:           string;
  link:           string;
};

export interface INavBarProps {
  pages: IPagesList[];
};
export interface IBookTableProps {
  books: IBookInfo[];
  setBooks: (books: IBookInfo[]) => void;
};
export interface ITableHeaderProps {
  titles: string[];
};
export interface IFooterProps {
  links: TLinks[];
};
export interface IActionListProps {
  book: IBookInfo;
  deleteBookHandle: (book: IBookInfo) => void;
  changeBookActiveHandle: (book: IBookInfo) => void;
};
export interface ITableRowProps {
  book: IBookInfo;
  deleteBookHandle: (books: IBookInfo) => void;
  changeBookActiveHandle: (books: IBookInfo) => void;
}
export interface IActionButtonProps {
  name: string;
  callback?: () => void;
  color?: string;
  path?: string;
};
export interface ILayoutProps {
  pagesList: IPagesList[];
  children: React.ReactNode;
};
export interface ISelectMenuProps {
  dispatch: React.Dispatch<IActions>;
};
export interface INewBookProps {
  book: IBookInfo;
  setBook: (book: IBookInfo) => void;
};
export interface IFormInputProps {
  name: string;
};
export interface IModalContentProps {
  onClose: () => void;
  info: string;
};