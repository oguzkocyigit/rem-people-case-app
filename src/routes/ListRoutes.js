export const ListRoutes = [
  {
    path: 'table/',
    name: 'list.table',
    component: () => import('@/components/Table/Table.vue'),
    props: true,
    meta: {
      guard: { except: ['guest'] },
      title: 'List Page View',
    },
  },
  {
    path: 'chart/',
    name: 'list.chart',
    component: () => import('@/components/Chart/Chart.vue'),
    props: true,
    meta: {
      guard: { except: ['guest'] },
      title: 'List Page View',
    },
  },
]
