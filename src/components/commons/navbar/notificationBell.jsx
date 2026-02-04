import React, { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const containerRef = useRef(null);

  // Notifications
  const baseNotifications = [
    { id: 1, text: "Welcome! Thanks for visiting my portfolio.", read: false },
    {
      id: 2,
      text: "Open to full-time opportunities and interesting projects!",
      read: false,
    },
  ];

  // Get last base id
  const lastBaseId =
    baseNotifications.length > 0
      ? baseNotifications[baseNotifications.length - 1].id
      : null;

  // Get last unread id
  const lastUnreadId =
    notifications.length > 0
      ? [...notifications].reverse().find((n) => !n.read)?.id
      : null;

  // Load from localStorage and merge with base
  useEffect(() => {
    const saved = localStorage.getItem("notifications");
    let merged = baseNotifications;

    if (saved) {
      const savedArray = JSON.parse(saved);
      const savedMap = new Map(savedArray.map((n) => [n.id, n]));
      merged = baseNotifications.map((n) => savedMap.get(n.id) || n);
    }
    setNotifications(merged);
  }, []);

  // localStorage
  useEffect(() => {
    if (notifications.length > 0) {
      localStorage.setItem("notifications", JSON.stringify(notifications));
    }
  }, [notifications]);

  const unread = notifications.filter((n) => !n.read);
  const read = notifications.filter((n) => n.read);
  const unreadCount = unread.length;

  // Close dropdown
  useEffect(() => {
    function handleDocClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);

  // Mark as read
  useEffect(() => {
    if (open && unreadCount > 0) {
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    }
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Notifications"
        onClick={() => setOpen((v) => !v)}
        className="relative rounded-full p-2 hover:bg-[#12121a] transition-colors"
      >
        <FaBell className="text-xl text-zinc-400 hover:text-[#998542] cursor-pointer transition-colors" />
        {unreadCount > 0 && lastBaseId && (
          <span className="absolute top-0 right-0 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#500000] text-xs text-white">
            {lastBaseId}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-72 max-w-sm rounded-xl border border-[#998542]/10 bg-[#12121a] shadow-lg">
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">
                Notifications
              </h4>
            </div>

            {read.length > 0 ? (
              <ul className="max-h-48 divide-y divide-[#998542]/10 overflow-auto">
                {read.map((n) => (
                  <li key={n.id} className="py-3 text-sm text-zinc-400">
                    {n.text}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-zinc-500">No notifications.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
