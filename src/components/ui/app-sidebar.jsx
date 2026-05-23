import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Images,
  PaletteIcon,
  PartyPopper,
  PenSquare,
  Search,
  ShieldCheck,
  SquareUserRound,
  Sparkles,
  SwatchBook,
  TextIcon,
  Video,
  X,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  useSidebar,
} from "../../components/ui/sidebar";
import OhiLogo from "../LandingPage/Logo/logo";
import profileImage from "../../assets/images/ProfileSettingImg/Profile-image.png";
import { useAdminAuth } from "../../context/AdminAuthContext";

const mainItems = [
  {
    title: "OHI Overview",
    url: "/dashboard/overview",
    icon: ShieldCheck,
  },
  {
    title: "Homepage Editor",
    url: "/dashboard/landing-page",
    icon: PaletteIcon,
  },
];

const sectionItems = [
  { title: "Hero", url: "/dashboard/landing-page#hero-content", icon: Sparkles },
  { title: "Theme", url: "/dashboard/landing-page#theme-settings", icon: SwatchBook },
  { title: "About OHI", url: "/dashboard/landing-page#about-ohi", icon: PenSquare },
  { title: "Why OHI", url: "/dashboard/landing-page#why-ohi", icon: PartyPopper },
  {
    title: "Who We Serve",
    url: "/dashboard/landing-page#who-we-serve",
    icon: SquareUserRound,
  },
  { title: "Gallery", url: "/dashboard/landing-page#gallery", icon: Images },
  {
    title: "Gallery Stories",
    url: "/dashboard/landing-page#gallery-stories",
    icon: TextIcon,
  },
  { title: "Video Section", url: "/dashboard/landing-page#video-section", icon: Video },
  {
    title: "Mission, Vision & Values",
    url: "/dashboard/landing-page#mission-vision-values",
    icon: ShieldCheck,
  },
  {
    title: "Selected Voices",
    url: "/dashboard/landing-page#selected-voices",
    icon: ShieldCheck,
  },
  {
    title: "Footer",
    url: "/dashboard/landing-page#footer-settings",
    icon: ShieldCheck,
  },
];

function isActivePath(location, url) {
  if (url.includes("#")) return `${location.pathname}${location.hash}` === url;
  return location.pathname === url;
}

export function AppSidebar(props) {
  const { state, openMobile, setOpenMobile } = useSidebar();
  const { user } = useAdminAuth();
  const location = useLocation();
  const collapsed = state === "collapsed";

  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const sidebarUser = {
    name: user?.name || "OHI Admin",
    email: user?.email || "admin@olympianhouseintl.com",
    avatar: profileImage,
  };

  if (loading) {
    return (
      <Sidebar collapsible="icon" {...props} className="flex min-h-dvh flex-col">
        <SidebarHeader className="sticky top-0 z-10 !items-start border-b border-border bg-background/95 backdrop-blur">
          <div className="flex w-full flex-col items-center gap-3 px-3 py-3">
            <div className={cn("flex w-full items-center gap-2", collapsed ? "justify-center" : "justify-start")}>
              <SidebarMenuSkeleton showIcon />
            </div>
            <SidebarMenuSkeleton showIcon={false} />
            {!collapsed && isMobile && openMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto h-8 w-8 rounded-full"
                onClick={() => setOpenMobile(false)}
                aria-label="Close sidebar"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </SidebarHeader>
        <SidebarContent className="flex h-full flex-col overflow-y-auto text-sm">
          <div className="flex flex-1 min-h-0 flex-col gap-2 px-2 py-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <SidebarMenuSkeleton key={index} showIcon />
            ))}
          </div>
        </SidebarContent>
        <SidebarFooter className="border-t border-border px-4 py-4">
          <div className="flex items-center gap-3">
            <SidebarMenuSkeleton showIcon />
            <div className="flex flex-1 flex-col gap-2">
              <SidebarMenuSkeleton />
              <SidebarMenuSkeleton />
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    );
  }

  return (
    <Sidebar collapsible="icon" {...props} className="flex min-h-dvh flex-col">
      <SidebarHeader className="sticky top-0 z-10 !items-start border-b border-border bg-background/95 backdrop-blur">
        <div className={cn("flex w-full flex-col gap-3", collapsed ? "px-1 py-2" : "px-3 py-3")}>
          <div className={cn("flex items-center gap-2", collapsed ? "justify-center" : "justify-start")}>
            <OhiLogo className={cn("transition-all", collapsed ? "h-8 w-8" : "h-9 w-32")} />
            {!collapsed && isMobile && openMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto h-8 w-8 rounded-full"
                onClick={() => setOpenMobile(false)}
                aria-label="Close sidebar"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="w-full">
            {collapsed ? (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors duration-200 hover:bg-muted/80">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
            ) : (
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <SidebarInput
                  type="text"
                  placeholder="Search workspace"
                  className="rounded-full pl-9"
                  disabled
                />
              </div>
            )}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex h-full flex-col overflow-y-auto text-sm">
        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="px-5 pt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Workspace
          </SidebarGroupLabel>
          <SidebarMenu className="px-3">
            {mainItems.map((item) => {
              const active = isActivePath(location, item.url);
              const Icon = item.icon;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={active} tooltip={collapsed ? item.title : undefined}>
                    <Link to={item.url}>
                      <Icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="px-5 pt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Sections
          </SidebarGroupLabel>
          <SidebarMenu className="px-3">
            {sectionItems.map((item) => {
              const active = isActivePath(location, item.url);
              const Icon = item.icon;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="sm" isActive={active} tooltip={collapsed ? item.title : undefined}>
                    <Link to={item.url}>
                      <Icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border bg-background/80 backdrop-blur">
        <div className="flex items-center gap-3 px-3 py-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={sidebarUser.avatar} alt={sidebarUser.name} />
            <AvatarFallback>{sidebarUser.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-foreground">
                {sidebarUser.name}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {sidebarUser.email}
              </p>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
