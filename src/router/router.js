import { createRouter, createWebHistory } from "vue-router";

import Mainkoa from "../views/Mainkoa.vue"
import Infokoa from "../views/Infokoa.vue"
import Constructionkoa from "../views/Constructionkoa.vue"
import Cartkoa from "../views/Cartkoa.vue"
import TestingHome from "../views/Home.vue"
import auth from "../stores/auth"

import DetailProductkoa from "../views/DetailProductkoa.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Mainkoa,
  },
  {
    path: "/info",
    name: "Info",
    component: Infokoa,
  },
  {
    path: "/construction",
    name: "Construction",
    component: Constructionkoa,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cartkoa,
  },
  {
    path: "/productlist/:country",
    props:true,
    name: "ProductList",
    component: () => import('../views/ProductListKoa.vue')
  },
  {
    path: "/detailproduct/:id",
    props:true,
    name: "DetailProduct",
    component: DetailProductkoa,
  },
  {
    path: "/TestingHome",
    name: 'TestingHome',
    component: TestingHome,
  },
  {
    path: "/auth",
    name: 'Auth',
    component: auth,
    meta: { requiresAuth: true }
      
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach( async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)){
    if (await getCurrentUser()){
      next();
    } else {
      alert("No tienes acceso");
      next('/');
    }
  } else {
    next();
  }
});

export default router;
