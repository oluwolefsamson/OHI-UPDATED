import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

// Pages
import Home from "../pages/LandingPage/Home";
import CompanyProfile from "../pages/LandingPage/CompanyProfile/CompanyProfile";
import AboutPage from "../pages/LandingPage/CompanyProfile/AboutPage";
import BackgroundPage from "../pages/LandingPage/CompanyProfile/BackgroundPage";
import OurTeamPage from "../pages/LandingPage/CompanyProfile/OurTeamPage";
import OurPartnersPage from "../pages/LandingPage/CompanyProfile/OurPartnersPage";
import OurPlatformsPage from "../pages/LandingPage/CompanyProfile/OurPlatformsPage";
import PastPresidentsPage from "../pages/LandingPage/CompanyProfile/PastPresidentsPage";
import CentralAfricaPage from "../pages/LandingPage/CompanyProfile/CentralAfricaPage";
import EastAfricaPage from "../pages/LandingPage/CompanyProfile/EastAfricaPage";
import SouthernAfricaPage from "../pages/LandingPage/CompanyProfile/SouthernAfricaPage";
import USAPage from "../pages/LandingPage/CompanyProfile/USAPage";
import ServicesPage from "../pages/LandingPage/CompanyProfile/ServicesPage";
import PortfolioPage from "../pages/LandingPage/CompanyProfile/PortfolioPage";
import WhoWeServePage from "../pages/LandingPage/CompanyProfile/WhoWeServePage";
import ImpactPage from "../pages/LandingPage/CompanyProfile/ImpactPage";
import ApproachPage from "../pages/LandingPage/CompanyProfile/ApproachPage";
import ContactPage from "../pages/LandingPage/CompanyProfile/ContactPage";
import ErrorPage from "../pages/LandingPage/ErrorPage";
import Dashboard from "../pages/Client-Dashboard/Dashboard";
import ProfileSetting from "../pages/Client-Dashboard/ProfileSetting";
import { Overview } from "../pages/Client-Dashboard/Overview";
import LandingPageManager from "../pages/Client-Dashboard/LandingPageManager";
import AdminLogin from "../pages/Client-Dashboard/AdminLogin";
import { RequireAdminAuth } from "../components/ui/RequireAdminAuth";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="company-profile" element={<CompanyProfile />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="background" element={<BackgroundPage />} />
        <Route path="our-team" element={<OurTeamPage />} />
        <Route path="our-partners" element={<OurPartnersPage />} />
        <Route path="our-platforms" element={<OurPlatformsPage />} />
        <Route path="past-presidents" element={<PastPresidentsPage />} />
        <Route path="central-africa" element={<CentralAfricaPage />} />
        <Route path="east-africa" element={<EastAfricaPage />} />
        <Route path="southern-africa" element={<SouthernAfricaPage />} />
        <Route path="usa" element={<USAPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="who-we-serve" element={<WhoWeServePage />} />
        <Route path="impact" element={<ImpactPage />} />
        <Route path="approach" element={<ApproachPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="admin/login" element={<AdminLogin />} />

        {/* Dashboard */}
        <Route
          path="dashboard/*"
          element={
            <RequireAdminAuth>
              <Dashboard />
            </RequireAdminAuth>
          }
        >
          <Route index element={<LandingPageManager />} />
          <Route path="overview" element={<Overview />} />
          <Route path="profile-setting" element={<ProfileSetting />} />
          <Route path="landing-page" element={<LandingPageManager />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
