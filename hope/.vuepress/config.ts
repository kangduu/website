import hope from "vuepress-theme-hope";

export default hope.config({
  /** 部署站点的基础路径 */
  base: "/website/",

  title: "大眼猫看前端",
  description: "HTML、CSS、JavaScript、TypeScript、React、Vue...",

  /** 指定 vuepress build 的输出目录 */
  dest: "./dist",

  /** 深色模式支持选项 */
  darkmode: "auto",

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  themeConfig: {
    author: "大眼猫",
    logo: "/logo.png",
    /** 站点地址 */
    hostname: "https://kangduu.github.io/website",
    repo: "https://github.com/kangduu",

    repoDisplay: false,
    editLinks: false,

    nav: [
      { text: "Home·首页", link: "/", icon: "home" },
      { text: "React·深入浅出", link: "/react/", icon: "react" },
      { text: "JavaScript·进阶", link: "/javascript/", icon: "javascript" },
      { text: "案例·示范", link: "/case/", icon: "template" },
      { text: "面试·题库", link: "/interview/", icon: "read" },
    ],

    blog: {
      name: "大眼猫",
      avatar: "/profile.jpg",
      // intro: "/intro/",
      sidebarDisplay: "always",
      links: {
        // Zhihu: "https://zhihu.com",
        // Baidu: "https://baidu.com",
        Github: "https://github.com",
      },
    },

    encrypt: {
      global: "950918",
    },

    footer: {
      display: true,
      content: "人世间最远的距离 —— 知道、做到",
    },

    copyright: {
      status: "global",
    },

    cleanUrl: false,

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      // apple: {
      //   icon: "/assets/icon/apple-icon-152.png",
      //   statusBarColor: "black",
      // },
      // msTile: {
      //   image: "/assets/icon/ms-icon-144.png",
      //   color: "#ffffff",
      // },
      manifest: {
        icons: [
          // {
          //   src: "/assets/icon/chrome-mask-512.png",
          //   sizes: "512x512",
          //   purpose: "maskable",
          //   type: "image/png",
          // },
          // {
          //   src: "/assets/icon/chrome-mask-192.png",
          //   sizes: "192x192",
          //   purpose: "maskable",
          //   type: "image/png",
          // },
          {
            src: "/512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        // shortcuts: [
        //   {
        //     name: "Guide",
        //     short_name: "Guide",
        //     url: "/guide/",
        //     icons: [
        //       {
        //         src: "/assets/icon/guide-maskable.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/guide-monochrome.png",
        //         sizes: "192x192",
        //         purpose: "monochrome",
        //         type: "image/png",
        //       },
        //     ],
        //   },
        // ],
      },
    },
  },
});
