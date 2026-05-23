import React from "react";
import { useNavigate } from "react-router-dom";
import {
  House,
  Search,
  User,
  X,
  Bell,
  CheckCircle2,
  XCircle,
  Info,
  AlertTriangle,
  Trash2,
  CheckCheck,
} from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { SidebarTrigger } from "../../components/ui/sidebar";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { useProfile } from "../../context/ProfileContext";
import { useNotifications } from "../../context/NotificationContext";
import { motion, AnimatePresence } from "framer-motion";

const typeConfig = {
  success: {
    icon: CheckCircle2,
    color: "text-green-500",
    bg: "bg-green-50",
    border: "border-green-100",
  },
  error: {
    icon: XCircle,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
  },
  info: {
    icon: Info,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
};

function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [notifOpen, setNotifOpen] = React.useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAdminAuth();
  const { profile } = useProfile();
  const { notifications, unreadCount, markAllRead, clearAll, removeNotification } = useNotifications();

  const displayName = profile?.full_name || user?.name || "OHI Admin";
  const avatarUrl = profile?.avatar_url || null;

  const handleOpenNotif = () => {
    setNotifOpen(true);
    // Small delay before marking read so badge is visible briefly
    setTimeout(markAllRead, 1500);
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0f4c81]/25 to-transparent" />

      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-2xl rounded-3xl border border-border bg-card p-4 shadow-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>Search workspace</DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search OHI content..."
                className="rounded-full border-border bg-muted pl-9 focus-visible:ring-2 focus-visible:ring-[#0f4c81]/20 focus-visible:ring-offset-0"
                autoFocus
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="relative z-10 flex w-full items-center justify-between gap-3 px-4 sm:px-5 lg:px-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <SidebarTrigger className="h-9 w-9 rounded-full p-1.5 hover:bg-muted" />
          <Separator orientation="vertical" className="h-6 w-px" />
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              OHI workspace
            </p>
            <h1 className="truncate text-sm font-semibold text-foreground md:text-lg">
              Welcome back, {displayName}
            </h1>
          </div>
        </div>

        <div className="hidden flex-1 max-w-2xl mx-8 md:flex">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search OHI content..."
              className="rounded-full border-border bg-muted/90 pl-9 focus-visible:ring-2 focus-visible:ring-[#0f4c81]/20 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(true)}
            className="rounded-full md:hidden"
            aria-label="Open search"
          >
            <Search className="h-5 w-5 text-foreground" />
          </Button>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Notification Bell */}
            <Popover open={notifOpen} onOpenChange={setNotifOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative rounded-full hover:bg-[#0f4c81]/10"
                  aria-label="Notifications"
                  onClick={handleOpenNotif}
                >
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <AnimatePresence>
                    {unreadCount > 0 && (
                      <motion.span
                        key="badge"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white"
                      >
                        {unreadCount > 9 ? "9+" : unreadCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </PopoverTrigger>

              <PopoverContent
                className="w-96 rounded-2xl border border-border bg-card p-0 shadow-2xl"
                align="end"
                sideOffset={8}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Notifications</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {notifications.length === 0
                        ? "All caught up!"
                        : `${notifications.length} notification${notifications.length > 1 ? "s" : ""}`}
                    </p>
                  </div>
                  {notifications.length > 0 && (
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 rounded-full text-muted-foreground hover:text-foreground"
                        onClick={markAllRead}
                        title="Mark all as read"
                      >
                        <CheckCheck className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 rounded-full text-muted-foreground hover:text-red-500"
                        onClick={clearAll}
                        title="Clear all"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>

                {/* Notification List */}
                <div className="max-h-96 overflow-y-auto">
                  <AnimatePresence initial={false}>
                    {notifications.length === 0 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-12 text-muted-foreground"
                      >
                        <Bell className="h-10 w-10 mb-3 opacity-20" />
                        <p className="text-sm font-medium">No notifications yet</p>
                        <p className="text-xs mt-1 opacity-70">Actions you take will appear here</p>
                      </motion.div>
                    ) : (
                      notifications.map((notif) => {
                        const cfg = typeConfig[notif.type] || typeConfig.info;
                        const Icon = cfg.icon;
                        return (
                          <motion.div
                            key={notif.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className={`flex items-start gap-3 border-b border-border/50 px-4 py-3 last:border-0 ${!notif.read ? "bg-blue-50/40" : ""}`}
                          >
                            <div className={`mt-0.5 flex-shrink-0 rounded-full p-1.5 ${cfg.bg}`}>
                              <Icon className={`h-3.5 w-3.5 ${cfg.color}`} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-semibold text-foreground">{notif.title}</p>
                              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{notif.message}</p>
                              <p className="text-[10px] text-muted-foreground/60 mt-1">{timeAgo(notif.timestamp)}</p>
                            </div>
                            <button
                              onClick={() => removeNotification(notif.id)}
                              className="flex-shrink-0 rounded-full p-1 text-muted-foreground/50 hover:bg-muted hover:text-muted-foreground transition-colors"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </motion.div>
                        );
                      })
                    )}
                  </AnimatePresence>
                </div>
              </PopoverContent>
            </Popover>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex h-auto items-center gap-2 rounded-full px-3 py-2 hover:bg-muted sm:px-4"
                >
                  <Avatar className="h-8 w-8">
                    {avatarUrl && <AvatarImage src={avatarUrl} alt="Profile" />}
                    <AvatarFallback>{displayName.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="hidden text-sm font-semibold text-foreground sm:inline md:text-base">
                    {displayName}
                  </span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-48 rounded-2xl border border-border bg-card shadow-lg">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => navigate("/dashboard/profile-setting")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  <House className="mr-2 h-4 w-4" />
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => {
                    logout();
                    navigate("/admin/login", { replace: true });
                  }}
                >
                  <X className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
