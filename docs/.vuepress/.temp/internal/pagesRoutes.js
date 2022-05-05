import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-e02a086e","/javascript/",{"title":"JavaScript"},["/javascript/index.html","/javascript/README.md"]],
  ["v-d78cd3a0","/question/",{"title":"每日壹题"},["/question/index.html","/question/README.md"]],
  ["v-dc3b2a6e","/react/",{"title":""},["/react/index.html","/react/README.md"]],
  ["v-20a9438f","/react/react-router/",{"title":""},["/react/react-router/index.html","/react/react-router/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
