export const config = {
  siteMeta: {
    title: "Among Us Fan Site ",
    name: "kinoko35",
    description: "This is Among Us Fan Site with YoutubeAPI.",
  },
  siteRoot:
    process.env.NODE_ENV === "production" ? "" : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "GitHub",
      href: "https://github.com/kinokoTakenoko35/among-us-api",
    },
    {
      title: "Twitter",
      href: "https://twitter.com",
    },
  ],
};
