module.exports = {
  title: "大眼猫的博客",
  description: "博客,前端,个人网站,技术博客,React,Vue,JavaScript,HTML,CSS",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [
      { text: "JavaScript🔥根深蒂固", link: "/react/" },
      { text: "React🔥深入浅出", link: "/react/" },
      { text: "Interview🔥每日壹题", link: "/question/" },
      {
        text: "GitHub",
        link: "https://github.com/kangduu",
      },
    ],
  },
};
