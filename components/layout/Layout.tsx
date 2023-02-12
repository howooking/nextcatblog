import { ReactNode } from 'react';
import MainNavigation from './MainNavigation';
import { useNotificationContext } from '@/context/notificationContext';
import Notification from '../ui/notification';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const { activeNotification } = useNotificationContext();
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
}
