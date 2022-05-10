import { defaultTheme, defineUserConfig } from "vuepress";
import * as hopeTheme from "vuepress-theme-hope";

export default defineUserConfig({
  // lang: "zh-CN",
  title: "大眼猫看前端",
  description: "JavaScript、TypeScript、React、Vue、HTML、CSS",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  theme: hopeTheme({
    home: "/",
    navbar: [
      {
        text: "React🔥深入浅出",
        link: "/react/",
        children: [{ text: "React Router", link: "/react/react-router" }],
      },
      { text: "JavaScript🔥根深蒂固", link: "/javascript/" },
      { text: "Interview🔥每日壹题", link: "/question/" },
    ],
    logo: "/logo.png",
    logoDark: "/logo.png",
    darkMode: true,
    repo: "https://github.com/kangduu/kangduu.github.io",
    // ... language
    sidebar: false,
    sidebarDepth: 2,
    editLink: false,
    editLinkText: "在 GitHub 上编辑此页",
    editLinkPattern: "",
    // ... docs
    lastUpdated: false,
    lastUpdatedText: "上次更新",
    contributors: false,
    contributorsText: "",
    tip: "提示",
    warning: "警告",
    danger: "危险",
    notFound: ["404", "没有找到"],
    backToHome: "返回首页",
    openInNewWindow: "在新窗口打开",
    toggleDarkMode: "切换暗色模式",
    toggleSidebar: "切换侧边栏",
  }),
});

// export default defineUserConfig({
//   lang: "zh-CN",
//   title: "大眼猫看前端",
//   description: "JavaScript、TypeScript、React、Vue、HTML、CSS",
//   head: [["link", { rel: "icon", href: "/logo.png" }]],
//   theme: defineHopeConfig({
//     logo: "/logo.png",
//     // themeConfig: {
//     //   nav: [
//     //     {
//     //       text: "React🔥深入浅出",
//     //       link: "/react/",
//     //       items: [{ text: "React Router", link: "/react/react-router" }],
//     //     },
//     //     { text: "JavaScript🔥根深蒂固", link: "/javascript/" },
//     //     { text: "Interview🔥每日壹题", link: "/question/" },
//     //     {
//     //       text: "GitHub",
//     //       link: "https://github.com/kangduu",
//     //     },
//     //   ],
//     // },
//   }),
// });

// module.exports = defineHopeConfig({
//   themeConfig: {
//     logo: "/logo.png",
//     nav: [
//       {
//         text: "React🔥深入浅出",
//         link: "/react/",
//         items: [{ text: "React Router", link: "/react/react-router" }],
//       },
//       { text: "JavaScript🔥根深蒂固", link: "/javascript/" },
//       { text: "Interview🔥每日壹题", link: "/question/" },
//       {
//         text: "GitHub",
//         link: "https://github.com/kangduu",
//       },
//     ],
//   },
// });
