const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },
      {
        path: "/dashboard",
        component: () => import("pages/DashboardPage.vue"),
      },
      {
        path: "/trabajadores",
        component: () => import("pages/TrabajadoresPage.vue"),
      },
      {
        path: "/reportes",
        component: () => import("pages/ReportesPage.vue"),
      },
      {
        path: "/procesos",
        component: () => import("pages/ProcesosPage.vue"),
      },
      {
        path: "/usuarios",
        component: () => import("pages/UsuariosPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
