export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Quizzies Quiz App",
  description: "Sigma Quiz App for Sigma People",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Category",
      href: "/category",
    },
    {
      label: "Leaderboard",
      href: "/leaderboard",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {},
};
