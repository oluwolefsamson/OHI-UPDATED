import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Search,
  X,
  Youtube,
  Home,
} from "lucide-react";
import Logo from "../Logo/logo.jsx";
import { publicContactPoints, publicMenuSections, publicUtilityLinks } from "../afidffData";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../../ui/dropdown-menu";

const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { label: "X", icon: X, href: "https://x.com" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsPinned(window.scrollY > 44);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative z-50 bg-[#bb7422] text-white">
        <div className="container flex h-11 items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white transition hover:bg-white/15"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-5 md:flex">
            {publicContactPoints.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="inline-flex items-center gap-2 font-medium text-white/95"
              >
                {contact.href.startsWith("tel:") ? (
                  <Phone className="h-4 w-4" />
                ) : (
                  <Mail className="h-4 w-4" />
                )}
                <span>{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <header
        className={`inset-x-0 z-40 border-b border-[#e9e0d1] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)] ${
          isPinned ? "fixed top-0" : "relative"
        }`}
      >
        <div className="container flex h-[96px] items-center justify-between gap-5">
          <Link to="/" className="shrink-0" aria-label="Go to home page">
            <Logo className="h-14 md:h-16" />
          </Link>

          <nav className="hidden flex-1 items-center justify-center xl:flex">
            <ul className="flex items-center gap-4">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    [
                      "inline-flex h-10 w-10 items-center justify-center rounded-full transition",
                      isActive ? "text-[#bb7422]" : "text-[#2b313a] hover:text-[#bb7422]",
                    ].join(" ")
                  }
                  aria-label="Home"
                >
                  <Home className="h-5 w-5" />
                </NavLink>
              </li>

              {publicMenuSections.map((section) => (
                <li key={section.label}>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-md px-1.5 py-2 text-[14px] font-medium uppercase tracking-[0.02em] text-[#2b313a] transition hover:text-[#bb7422]">
                      <span>{section.label}</span>
                      <ChevronDown className="h-4 w-4 opacity-80" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-72 overflow-hidden p-0">
                      <div className="p-1">
                      {section.items?.map((item, index) =>
                        item.isHeader ? (
                          <React.Fragment key={`${item.label}-${index}`}>
                            {index > 0 && <DropdownMenuSeparator />}
                            <DropdownMenuLabel className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#bb7422]">
                              {item.label}
                            </DropdownMenuLabel>
                            {item.items?.map((subItem) => (
                              <DropdownMenuItem key={subItem.href} asChild>
                                <Link to={subItem.href} className="cursor-pointer">
                                  {subItem.label}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </React.Fragment>
                        ) : (
                          <DropdownMenuItem key={item.href} asChild>
                            <Link to={item.href} className="cursor-pointer">
                              {item.label}
                            </Link>
                          </DropdownMenuItem>
                        )
                      )}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ))}

            </ul>
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-[#2b313a] transition hover:text-[#bb7422]"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            {publicUtilityLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="inline-flex h-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#f59d21_0%,#c96b17_100%)] px-6 text-sm font-bold uppercase tracking-[0.02em] text-white shadow-[0_12px_28px_rgba(201,107,23,0.3)] transition hover:brightness-105"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e0d6c5] text-[#2b313a] xl:hidden"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {isPinned ? <div aria-hidden="true" className="h-[96px]" /> : null}

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 xl:hidden ${
          isDrawerOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[min(92vw,380px)] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] transition-transform duration-300 xl:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#eee3d2] px-5 py-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#bb7422]">
              Menu
            </p>
            <p className="mt-1 text-sm font-medium text-[#2b313a]">Olympian House International</p>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e0d6c5] text-[#2b313a]"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="h-[calc(100%-73px)] overflow-y-auto px-5 py-5">
          <div className="grid gap-3">
            {publicMenuSections.map((section) => (
              <div key={section.label} className="space-y-2">
                <div className="rounded-2xl border border-[#eee3d2] px-4 py-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.02em] text-[#2b313a]">
                    {section.label}
                  </p>
                </div>
                <div className="ml-4 space-y-1 border-l border-[#eee3d2] pl-4">
                  {section.items?.map((item, index) =>
                    item.isHeader ? (
                      <div key={`${item.label}-${index}`} className="space-y-1">
                        <p className="text-[10px] font-bold uppercase tracking-[0.05em] text-[#bb7422] pt-2">
                          {item.label}
                        </p>
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block rounded-lg px-3 py-1.5 text-xs font-medium text-[#2b313a] hover:bg-[#f5f1e8] hover:text-[#bb7422]"
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block rounded-lg px-3 py-1.5 text-xs font-medium text-[#2b313a] hover:bg-[#f5f1e8] hover:text-[#bb7422]"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,#f59d21_0%,#c96b17_100%)] px-6 text-sm font-bold uppercase tracking-[0.02em] text-white"
              onClick={() => setIsDrawerOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
