export const themeData = {
  "home": "/",
  "navbar": [
    {
      "text": "React🔥深入浅出",
      "link": "/react/",
      "children": [
        {
          "text": "React Router",
          "link": "/react/react-router"
        }
      ]
    },
    {
      "text": "JavaScript🔥根深蒂固",
      "link": "/javascript/"
    },
    {
      "text": "Interview🔥每日壹题",
      "link": "/question/"
    }
  ],
  "logo": "/logo.png",
  "logoDark": "/logo.png",
  "darkMode": true,
  "repo": "https://github.com/kangduu/kangduu.github.io",
  "sidebar": false,
  "sidebarDepth": 2,
  "editLink": false,
  "editLinkText": "在 GitHub 上编辑此页",
  "editLinkPattern": "",
  "lastUpdated": false,
  "lastUpdatedText": "上次更新",
  "contributors": false,
  "contributorsText": "",
  "tip": "提示",
  "warning": "警告",
  "danger": "危险",
  "notFound": [
    "404",
    "没有找到"
  ],
  "backToHome": "返回首页",
  "openInNewWindow": "在新窗口打开",
  "toggleDarkMode": "切换暗色模式",
  "toggleSidebar": "切换侧边栏",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
