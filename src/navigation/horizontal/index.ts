// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      icon: 'tabler:dashboard',
      title: 'Dashboard',
      path: '/dashboard'
    },
    {
      icon: 'tabler:help-hexagon',
      title: 'Requests',
      path: '/requests'
    },
    {
      icon: 'tabler:message-plus',
      title: 'Feedbacks',
      path: '/feedbacks'
    },
    {
      icon: 'tabler:report',
      title: 'Reports',
      path: '/reports'
    },
    {
      icon: 'tabler:checkbox',
      title: 'Settings',
      children: [
        {
          title: 'Assets',
          icon: 'tabler:toggle-left',
          path: '/forms/form-inputs'
        },
        {
          icon: 'tabler:layout-navbar',
          title: 'Esc.Metrix',
          path: '/forms/form-layouts'
        },
        {
          title: 'Services',
          path: '/forms/form-validation',
          icon: 'tabler:checkbox'
        },
        {
          title: 'Users',
          path: '/forms/form-wizard',
          icon: 'tabler:text-wrap-disabled'
        },
        {
          title: 'Permissions',
          icon: 'tabler:table',
          path: '/tables/mui'
        },
        {
          title: 'Departments',
          icon: 'tabler:layout-grid',
          path: '/settings/departments'
        },
        {
          title: 'Notifications',
          icon: 'tabler:notification',
          path: '/notifications'
        },
        {
          title: 'Payments',
          icon: 'tabler:currency-dollar',
          path: '/payments'
        }
      ]
    }
  ]
}

export default navigation
