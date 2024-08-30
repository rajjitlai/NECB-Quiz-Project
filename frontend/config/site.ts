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
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/Home",
    },
    {
      label: "Category",
      href: "/category",
    },
    {
      label: "Leaderboard",
      href: "/leaderboard",
    },
  ],
  links: {},
};
