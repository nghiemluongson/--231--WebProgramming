import React from 'react';
import './NotificationIcon.css';

function NotificationIcon(props) {
  return (
    <div className="notification-icon">
      <i className="fas fa-bell"></i>
      {props.notificationCount > 0 && <div className="notification-count">{props.notificationCount}</div>}
    </div>
  );
}

export default NotificationIcon;