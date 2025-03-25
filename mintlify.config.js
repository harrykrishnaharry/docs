export default {
  name: "My Awesome Docs",
  logo: "/logo.png",
  navigation: [
    { group: "Introduction", pages: ["docs/Retrieve_one_account.mdx.md"] },
    { group: "Guides", pages: ["docs/setup.mdx", "docs/List_all_accounts.mdx.md"] },
    { group: "API Reference", pages: ["docs/api/openapi.json"] }
  ],
  openapi: "docs/api/openapi.json",
  seo: {
    title: "My Awesome Docs",
    description: "Comprehensive documentation for my project",
  }
};
