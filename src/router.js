import { createWebHistory, createRouter } from "vue-router";
import DashboardNew from "./views/Dashboard/DashboardNew.vue";


const routes = [
    
    {
      path: "/",
      name: "Dashboard",
      component: DashboardNew,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;