import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/LandingPage/Header/Header";
import Supporters from "../components/LandingPage/Supporters/Supporters";
import Footer from "../components/LandingPage/Footer/Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  // Hide header/footer on dashboard or admin pages
  const hiddenRoutes = ["/signup", "/admin", "/dashboard"];
  const shouldHideHeaderFooter = hiddenRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  // Only show Supporters strip on selected pages
  const supportersRoutes = ["/", "/our-partners"];
  const shouldShowSupporters = supportersRoutes.includes(location.pathname);

  return (
    <>
      <AnimatePresence mode="wait">
        {!shouldHideHeaderFooter && (
          <motion.div
            key="site-header"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="will-change-transform"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <AnimatePresence mode="wait">
        {!shouldHideHeaderFooter && shouldShowSupporters && (
          <motion.div
            key="site-supporters"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.28, ease: "easeOut", delay: 0.05 }}
          >
            <Supporters />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {!shouldHideHeaderFooter && (
          <motion.div
            key="site-footer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.28, ease: "easeOut", delay: 0.08 }}
          >
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Layout;
