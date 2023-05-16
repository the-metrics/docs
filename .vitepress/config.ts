import { defineConfig } from "vitepress";
// import upload2cosPlugin from "vite-plugin-upload-cos";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Collectin Docs",
  description: "Collectin",
  outDir: "./docs",
  base: "/collectin-docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: "Docs",
        items: [
          { text: "隐私政策", link: "/docs/privacy" },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
