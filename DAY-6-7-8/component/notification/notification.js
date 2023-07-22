import React from "react";

const notifications = [
  {
    id: 1,
    message: "You have a new message.",
    date: "2023-07-22 10:30 AM",
  },
  {
    id: 2,
    message: "You have a new follower.",
    date: "2023-07-21 05:45 PM",
  },
  // Add more notification objects as needed...
];

export default function NotificationPage() {
  return (
    <div className="notification-page">
      <h1>Notifications</h1>
      {notifications.map((notification) => (
        <div key={notification.id} className="notification-item">
          <p className="notification-message">{notification.message}</p>
          <hr></hr>
          <p className="notification-date">{notification.date}</p>
        </div>
      ))}
    </div>
  );
}
