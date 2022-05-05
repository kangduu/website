export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/assets/blogging.png",
    "heroText": "大眼猫看前端",
    "tagline": "人世间最远的距离 — — 知道、做到",
    "actionText": "React系列",
    "actionLink": "/react/",
    "features": [
      {
        "title": "每日·壹题",
        "details": "收集日常遇到的问题，从问题出发提升个人能力。",
        "icon": "question",
        "link": "/question/"
      },
      {
        "title": "React技术栈",
        "details": "学习React源码；熟练运用 React Router、Redux、React Transition Group 等技术；能够独立使用Create React App、UmiJS等脚手架工具开发项目。"
      },
      {
        "title": "基础·巩固",
        "details": "JavaScript、TypeScript、浏览器、HTTP协议、数据结构与算法......"
      }
    ],
    "copyright": false,
    "footer": "MIT Licensed | Copyright © 2020-present kangduu"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "在线学习网站",
      "slug": "在线学习网站",
      "children": []
    },
    {
      "level": 2,
      "title": "阅读角",
      "slug": "阅读角",
      "children": []
    },
    {
      "level": 2,
      "title": "工具/查询",
      "slug": "工具-查询",
      "children": []
    },
    {
      "level": 2,
      "title": "特别说明",
      "slug": "特别说明",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
