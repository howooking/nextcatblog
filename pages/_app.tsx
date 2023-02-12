import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Layout from '@/components/layout/Layout';
import { NotificationCotextProvider } from '@/context/notificationContext';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <NotificationCotextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationCotextProvider>
  );
}
