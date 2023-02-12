/* eslint-disable operator-linebreak */
import { createContext, useContext, useMemo, useState } from 'react';

export type ActiveNotification = {
  title: string;
  status: string;
  message: string;
};
type NotificationContextType = {
  activeNotification: ActiveNotification | null;
  showNotification: (notificationData: ActiveNotification) => void;
  hideNotification: () => void;
};
export const NotificationContext = createContext<NotificationContextType>({
  activeNotification: null,
  showNotification: () => {},
  hideNotification: () => {},
});

type NotificationCotextProviderProps = {
  children: React.ReactNode;
};
export function NotificationCotextProvider({
  children,
}: NotificationCotextProviderProps): JSX.Element {
  const [activeNotification, setActiveNotification] =
    useState<ActiveNotification | null>(null);
  const showNotification = (notificationData: ActiveNotification): void => {
    setActiveNotification(notificationData);
  };
  const hideNotification = (): void => {
    setActiveNotification(null);
  };

  return (
    <NotificationContext.Provider
      value={useMemo(
        () => ({ activeNotification, showNotification, hideNotification }),
        [activeNotification],
      )}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotificationContext = () => useContext(NotificationContext);
