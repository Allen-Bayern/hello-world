import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// 增加页面
import Login from "../views/Login.vue";
import NotebookList from "../views/NoteBookList.vue";
import NoteDetail from "../views/NoteDetail.vue";
import Trash from "../views/Trash.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/notebooks",
    name: "NotebookList",
    component: NotebookList,
  },
  {
    path: "/note/:noteId",
    name: "NoteDetail",
    component: NoteDetail,
  },
  {
    path: "/trash/:noteId",
    name: "Trash",
    component: Trash,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
