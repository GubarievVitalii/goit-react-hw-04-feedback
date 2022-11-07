import s from './Notification.module.css';

const Notification = ({ message }) => {
  return (
      <p className={s.title}>{message}</p>      
  );
};

export default Notification;