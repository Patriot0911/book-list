import {
  Route,
  Routes
} from 'react-router-dom';
import './App.css';

import { IPagesList } from './types';
import Dashboard from './pages/Dashboard/Dashboard';
import BooksAction from './pages/BooksAction/BooksAction';
import Layout from './components/layouts/layout';

const pagesList: IPagesList[] = [
  {
    name: 'Dashboard',
    element: <Dashboard />,
    path: '/'
  },
  {
    name: 'Books Action',
    element: <BooksAction />,
    path: '/books'
  }
];

export default function App() {
  return (
    <Layout pagesList={pagesList}>
      <div className={'main'}>
        <Routes>
          {
            pagesList.map(item =>
            <Route
              key={item.name}
              path={item.path}
              element={item.element}
            />)
          }
        </Routes>
      </div>
    </Layout>
  );
};