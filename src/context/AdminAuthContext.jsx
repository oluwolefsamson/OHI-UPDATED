import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useNotifications } from "./NotificationContext";

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const navigate = useNavigate();
  const { addNotification } = useNotifications();
  const [session, setSession] = useState({
    isAuthenticated: false,
    user: null,
    loading: true,
  });

  useEffect(() => {
    // Check active session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession({
        isAuthenticated: !!session,
        user: session?.user ?? null,
        loading: false,
      });
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession({
        isAuthenticated: !!session,
        user: session?.user ?? null,
        loading: false,
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    let handlingExpiration = false;

    const handleSessionExpired = async (event) => {
      if (handlingExpiration) return;
      handlingExpiration = true;

      const message =
        event?.detail?.message || "Your admin session expired. Please sign in again.";

      addNotification(message, "warning", "Session Expired");
      await supabase.auth.signOut();
      setSession({
        isAuthenticated: false,
        user: null,
        loading: false,
      });
      navigate("/admin/login", { replace: true });
    };

    window.addEventListener("admin-session-expired", handleSessionExpired);

    return () => {
      window.removeEventListener("admin-session-expired", handleSessionExpired);
    };
  }, [addNotification, navigate]);

  const value = useMemo(() => {
    const login = async ({ email, password }) => {
      const normalizedEmail = (email || "").trim().toLowerCase();
      const normalizedPassword = (password || "").trim();

      const { data, error } = await supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password: normalizedPassword,
      });

      if (error) {
        return {
          ok: false,
          message: error.message || "Invalid admin email or password.",
        };
      }

      return {
        ok: true,
        message: "Signed in successfully.",
      };
    };

    const logout = async () => {
      await supabase.auth.signOut();
      setSession({
        isAuthenticated: false,
        user: null,
        loading: false,
      });
    };

    return {
      isAuthenticated: session.isAuthenticated,
      user: session.user,
      loading: session.loading,
      login,
      logout,
    };
  }, [session.isAuthenticated, session.user, session.loading]);

  return (
    <AdminAuthContext.Provider value={value}>
      {!session.loading && children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);

  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }

  return context;
}
