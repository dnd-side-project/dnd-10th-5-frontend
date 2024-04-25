import { FavolinkProvider } from '@favolink/react';
import { setAxiosUrl } from '@favolink/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import '@favolink/styles/reset.css';
import '@/styles/font.css';
import '@favolink/styles/theme.css';

setAxiosUrl(import.meta.env.VITE_API_HOST as string);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavolinkProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </FavolinkProvider>
    </QueryClientProvider>
  );
}
