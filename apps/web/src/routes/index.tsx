import { createBrowserRouter } from 'react-router-dom';
import HelloPage from '@/pages/HelloPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HelloPage />,
  },
]);
