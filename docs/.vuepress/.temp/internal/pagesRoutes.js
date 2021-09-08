import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-fffb8e28","/guide/","",["/guide/index.html","/guide/README.md"]],
  ["v-519a9efa","/guide/vscode.html","vscode配置",["/guide/vscode","/guide/vscode.md"]],
  ["v-4478cc10","/guide/%E8%BF%91%E6%97%A5%E5%A5%BD%E6%96%87.html","",["/guide/近日好文.html","/guide/%E8%BF%91%E6%97%A5%E5%A5%BD%E6%96%87","/guide/近日好文.md","/guide/%E8%BF%91%E6%97%A5%E5%A5%BD%E6%96%87.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
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
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
