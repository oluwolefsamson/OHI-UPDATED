import React, { useRef, useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Skeleton } from "../../components/ui/skeleton";
import defaultProfile from "../../assets/images/ProfileSettingImg/Profile-image.png";
import { useProfile } from "../../context/ProfileContext";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { AnimatedText } from "../../components/ui/AnimatedText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const navItems = [
  {
    id: "personal",
    icon: "user",
    label: "Personal Information",
    active: true,
  },
  {
    id: "security",
    icon: "lock",
    label: "Security Settings",
  },
];

const ProfileSetting = () => {
  const { profile, loading: profileLoading, updateProfile, uploadAvatar, changePassword } = useProfile();
  const { logout } = useAdminAuth();
  
  const [draftProfile, setDraftProfile] = useState(profile);
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);
  
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!profileLoading) {
      setDraftProfile(profile);
    }
  }, [profile, profileLoading]);

  // Handle file upload directly to backend
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const toastId = toast.loading("Uploading profile picture...");
      setIsSaving(true);
      const res = await uploadAvatar(file);
      if (res.ok) {
        toast.success(res.message, { id: toastId });
      } else {
        toast.error(res.message, { id: toastId });
      }
      setIsSaving(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSave = async () => {
    setIsSaving(true);
    const res = await updateProfile(draftProfile);
    if (res.ok) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    setIsSaving(false);
  };

  const handlePasswordChange = async () => {
    if (!newPassword) return;
    setIsSavingPassword(true);
    const pwRes = await changePassword(newPassword);
    if (pwRes.ok) {
      toast.success(pwRes.message);
      setNewPassword("");
    } else {
      toast.error(pwRes.message);
    }
    setIsSavingPassword(false);
  };

  const handleDiscard = () => {
    setDraftProfile(profile);
    setNewPassword("");
    setShowPassword(false);
    toast.info("Changes discarded.");
  };

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
  };

  if (profileLoading) {
    return (
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Skeleton */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex flex-col items-center mb-6">
                  <Skeleton className="w-24 h-24 rounded-full mb-4" />
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-6 w-28 mb-2" />
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <Skeleton className="h-5 w-32 mb-3" />
                  <div className="space-y-2">
                    {[...Array(3)].map((_, i) => (
                      <Skeleton key={i} className="h-8 w-full rounded-xl" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Main Content Skeleton */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-4 w-64" />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <Skeleton className="w-32 h-32 rounded-xl" />
                  <div className="flex-1 space-y-3">
                    <Skeleton className="h-4 w-48" />
                    <div className="flex space-x-3">
                      <Skeleton className="h-10 w-32 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <Skeleton className="h-6 w-40 mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-4 w-24 mb-1" />
                      <Skeleton className="h-10 w-full rounded-lg" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentAvatar = profile?.avatar_url || defaultProfile;

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen p-4 md:p-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - User Profile Navigation */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-gray-100">
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <img
                    src={currentAvatar}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-2 border-dashed bg-gray-200 mx-auto"
                  />
                  <button
                    className="absolute bottom-1 right-1 bg-[#05c1ff] text-white p-2 rounded-full hover:bg-[#0296cc] transition-colors"
                    onClick={triggerFileInput}
                    type="button"
                    disabled={isSaving}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
                <h3 className="font-bold text-lg text-gray-800">
                  {profile?.full_name || "Admin User"}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{profile?.role || "Editor"}</p>
                <div className="mt-3 flex items-center bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Verified</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold text-gray-700 mb-3">
                  Profile Settings
                </h3>
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      className={`w-full flex items-center text-sm py-3 px-4 rounded-xl transition-colors ${
                        item.active
                          ? "bg-blue-50 text-[#05c1ff] font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <span className="mr-3">
                        {item.icon === "user" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                        {item.icon === "lock" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        )}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  ))}

                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center py-3 px-4 rounded-xl transition-colors text-gray-600 hover:bg-red-50 hover:text-red-600 mt-8"
                  >
                    <span className="mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    </span>
                    <span>Logout</span>
                  </button>
                </nav>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={containerVariants} className="lg:col-span-3 space-y-6">
            {/* Profile Header */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                <AnimatedText text="Profile Settings" />
              </h2>
              <p className="text-gray-600">
                Manage your personal information, security settings, and preferences
              </p>
            </motion.div>

            {/* Photo Upload Section */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Profile Photo
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative">
                  <img
                    src={currentAvatar}
                    alt="Profile"
                    className="w-32 h-32 rounded-xl object-cover border-2 border-dashed bg-gray-200"
                  />
                  <button
                    className="absolute bottom-0 right-0 bg-[#05c1ff] text-white p-2 rounded-full hover:bg-[#0296cc] transition-colors"
                    onClick={triggerFileInput}
                    type="button"
                    disabled={isSaving}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-3">
                    At least 800×800 px recommended. JPG or PNG is allowed
                  </p>
                  <div className="flex space-x-3">
                    <button
                      className="bg-[#05c1ff] hover:bg-[#0296cc] text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                      onClick={triggerFileInput}
                      type="button"
                      disabled={isSaving}
                    >
                      {isSaving ? "Uploading..." : "Upload New Photo"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal Info Section */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#05c1ff]/30 focus:border-[#05c1ff] outline-none transition"
                      value={draftProfile?.full_name || ""}
                      onChange={(e) => setDraftProfile({...draftProfile, full_name: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Email <span className="text-xs text-gray-400 font-normal ml-2">(Managed in Auth settings)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-200 bg-gray-50 text-gray-500 rounded-lg outline-none cursor-not-allowed"
                      value={draftProfile?.email || ""}
                      readOnly
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Phone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#05c1ff]/30 focus:border-[#05c1ff] outline-none transition"
                      value={draftProfile?.phone || ""}
                      onChange={(e) => setDraftProfile({...draftProfile, phone: e.target.value})}
                      placeholder="+234 000 000 0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Role
                  </label>
                  <div className="relative">
                    <select 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#05c1ff]/30 focus:border-[#05c1ff] outline-none transition appearance-none bg-white"
                      value={draftProfile?.role || "Editor"}
                      onChange={(e) => setDraftProfile({...draftProfile, role: e.target.value})}
                    >
                      <option value="Super Admin">Super Admin</option>
                      <option value="Editor">Editor</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-start gap-4 mt-6 pt-6 border-t border-gray-100">
                <button 
                  onClick={handleSave}
                  disabled={isSaving}
                  className="py-2.5 px-6 bg-[#05c1ff] hover:bg-[#0296cc] text-white rounded-lg font-medium transition-colors flex items-center justify-center shadow-sm disabled:opacity-70"
                >
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>
                <button 
                  onClick={handleDiscard}
                  disabled={isSaving}
                  className="py-2.5 px-6 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors flex items-center"
                >
                  Discard Changes
                </button>
              </div>
            </motion.div>

            {/* Security Section */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Security Settings
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-200 rounded-lg gap-4">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 mb-2">Change Password</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Enter a new password below to securely update your account access.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative w-full max-w-sm">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="New password (min 6 chars)"
                          className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#05c1ff]/30 focus:border-[#05c1ff] outline-none transition"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((current) => !current)}
                          className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-gray-500 hover:text-gray-800 transition-colors"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          title={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                      <button 
                        onClick={handlePasswordChange}
                        disabled={isSavingPassword || !newPassword}
                        className="py-3 px-6 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                      >
                        {isSavingPassword ? "Updating..." : "Update Password"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSetting;
