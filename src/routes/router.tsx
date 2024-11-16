import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@/components/layouts';
import { CartPage, Home, Singleproduct } from '@/pages';
import Login from '@/pages/login/Login';
import Register from '@/pages/register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
  },
  {
    path: '/Home',
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/products/:productID',
    element: (
      <AppLayout>
        <Singleproduct />
      </AppLayout>
    ),
  },
  {
    path: '/cart',
    element: (
      <AppLayout>
        <CartPage />
      </AppLayout>
    ),
  },
]);
