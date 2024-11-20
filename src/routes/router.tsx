import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@/components/layouts';
import { CartPage, Checkout, Home, SingleProduct } from '@/pages';
import Login from '@/pages/login';
import Register from '@/pages/register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
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
        <SingleProduct />
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
  {
    path: '/cart/checkout',
    element: (
      <AppLayout>
        <Checkout />
      </AppLayout>
    ),
  },
]);
