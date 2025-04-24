import { createBrowserRouter } from 'react-router';
import Front from './pages/Front';
import Order from './pages/Order';
import PageNotFound from './pages/PageNotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Front />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  { path: '/*', element: <PageNotFound /> },
]);
