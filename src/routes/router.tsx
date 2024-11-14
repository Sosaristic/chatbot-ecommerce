import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@/components/layouts';
import { CartPage, Home, Singleproduct } from '@/pages';

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
