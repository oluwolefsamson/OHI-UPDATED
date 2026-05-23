import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { supabase } from "../lib/supabase";
import { useAdminAuth } from "./AdminAuthContext";
import { useNotifications } from "./NotificationContext";

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const { user, isAuthenticated } = useAdminAuth();
  const { addNotification } = useNotifications();
  
  const [profile, setProfile] = useState({
    full_name: "",
    phone: "",
    role: "Editor",
    avatar_url: null,
    email: "",
  });
  const [loading, setLoading] = useState(true);

  // Fetch profile when user changes
  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      if (!isAuthenticated || !user) {
        if (isMounted) {
          setProfile({
            full_name: "",
            phone: "",
            role: "Editor",
            avatar_url: null,
            email: "",
          });
          setLoading(false);
        }
        return;
      }

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("admin_profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error("Error fetching profile:", error.message);
        }

        if (isMounted && data) {
          setProfile({
            full_name: data.full_name || "",
            phone: data.phone || "",
            role: data.role || "Editor",
            avatar_url: data.avatar_url || null,
            email: data.email || user.email || "",
          });
        } else if (isMounted && !data) {
          // If no profile exists, create a default local state using auth email
          setProfile((prev) => ({ ...prev, email: user.email }));
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated, user]);

  const value = useMemo(() => {
    // 1. Update text fields in profile
    const updateProfile = async (updates) => {
      if (!user) return { ok: false, message: "Not authenticated" };

      const { data, error } = await supabase
        .from("admin_profiles")
        .upsert({ 
          id: user.id, 
          email: user.email,
          ...profile, 
          ...updates, 
          updated_at: new Date().toISOString() 
        }, { onConflict: 'id' })
        .select()
        .single();

      if (error) {
        addNotification(error.message, "error", "Profile Update Failed");
        return { ok: false, message: error.message };
      }

      if (data) {
        setProfile({
          full_name: data.full_name || "",
          phone: data.phone || "",
          role: data.role || "Editor",
          avatar_url: data.avatar_url || null,
          email: data.email || user.email || "",
        });
      }
      addNotification("Your profile information has been saved.", "success", "Profile Updated");
      return { ok: true, message: "Profile updated successfully." };
    };

    // 2. Upload Avatar
    const uploadAvatar = async (file) => {
      if (!user) return { ok: false, message: "Not authenticated" };

      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) {
        addNotification(uploadError.message, "error", "Upload Failed");
        return { ok: false, message: uploadError.message };
      }

      // Get public URL
      const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
      
      const result = await updateProfile({ avatar_url: data.publicUrl });
      if (result.ok) addNotification("Your profile picture has been updated.", "success", "Avatar Updated");
      return result;
    };

    // 3. Change Password
    const changePassword = async (newPassword) => {
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) {
        addNotification(error.message, "error", "Password Update Failed");
        return { ok: false, message: error.message };
      }
      addNotification("Your password has been changed securely.", "success", "Password Updated");
      return { ok: true, message: "Password updated securely." };
    };

    return {
      profile,
      loading,
      updateProfile,
      uploadAvatar,
      changePassword,
    };
  }, [profile, loading, user]);

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within ProfileProvider");
  }
  return context;
}
