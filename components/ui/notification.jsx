/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classes from './notification.module.css';
import { useNotificationContext } from '../../context/notificationContext';

function Notification(props) {
  const { hideNotification } = useNotificationContext();

  // eslint-disable-next-line react/prop-types
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div
      className={`${activeClasses} hover:opacity-70`}
      onClick={hideNotification}
    >
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
