import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from '@/components/layouts';
import { Home } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  },
]);
