export const CostManagementRoutes = [
  {
    path: 'list',
    name: 'costManagement.list',
    component: () => import('@/views/CostManagement/CostManagementList.vue'),
    props: true,
    meta: {
      guard: { except: ['guest'] },
      title: 'Cost Management',
    },
  },
]
