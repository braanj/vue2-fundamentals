import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

// Define the routes for the application
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // Lazy-loaded route for the AboutView
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/planets/:slug",
    name: "planet",
    // Lazy-loaded route for the SinglePlanetView
    component: () =>
      import(/* webpackChunkName: "planet" */ "../views/SinglePlanet.vue"),
  },
];

// Create a new VueRouter instance with specified options
const router = new VueRouter({
  mode: "history", // Use HTML5 history mode for cleaner URLs
  base: process.env.BASE_URL, // Set the base URL for the router
  routes, // Use the defined routes for the application
});

export default router;
