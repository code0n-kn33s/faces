import Vue from 'vue'
import Router from 'vue-router'
import Table from './views/users-table.vue'
import Edit from "./views/users-edit.vue"
import Blog from "./views/users-blog.vue"
import About from "./views/users-about.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Table",
      component: Table
    },
    {
      path: "/edit/:id",
      name: "Edit",
      component: Edit
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});
