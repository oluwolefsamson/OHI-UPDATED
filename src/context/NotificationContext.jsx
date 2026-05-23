import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((message, type = "info", title = null) => {
    const newNotif = {
      id: Date.now() + Math.random(),
      message,
      title: title || (type === "success" ? "Success" : type === "error" ? "Error" : type === "warning" ? "Warning" : "Info"),
      type,
      timestamp: new Date(),
      read: false,
    };
    setNotifications((prev) => [newNotif, ...prev].slice(0, 50)); // cap at 50
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const value = useMemo(
    () => ({ notifications, unreadCount, addNotification, markAllRead, clearAll, removeNotification }),
    [notifications, unreadCount, addNotification, markAllRead, clearAll, removeNotification]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("useNotifications must be used within NotificationProvider");
  return context;
}
