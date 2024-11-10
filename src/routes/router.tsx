import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { AppLayout } from '@/components/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppLayout>
        <App />
      </AppLayout>
    ),
  },
]);
