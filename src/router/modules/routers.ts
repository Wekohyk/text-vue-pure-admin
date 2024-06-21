import { $t } from '@/lang/index';

export const routers = [
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard/index.vue'),
        meta: {
          isShow: true,
          title: $t('dashboard.dashboard'), // 仪表盘
          fontIcon: 'fa-solid fa-gear',
        },
      },
      {
        path: '/components',
        name: 'Components',
        redirect: '/icon',
        component: () => import('@/views/Components/index.vue'),
        meta: {
          isShow: true,
          title: $t('dashboard.components'), // 组件
          fontIcon: 'fa-brands fa-microsoft',
          toast: 'Components',
        },
        children: [
          {
            path: '/icon',
            name: 'Icon',
            component: () => import('@/views/Components/icon/index.vue'),
            meta: {
              title: $t('dashboard.icon'), // 图标
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/button',
            name: 'Button',
            component: () => import('@/views/Components/button/index.vue'),
            meta: {
              title: $t('dashboard.button'), // 按钮
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/card',
            name: 'Card',
            component: () => import('@/views/Components/card/index.vue'),
            meta: {
              title: $t('dashboard.card'), // 卡片
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/dialog',
            name: 'Dialog',
            component: () => import('@/views/Components/dialog/index.vue'),
            meta: {
              title: $t('dashboard.dialog'), // 对话框
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/pager',
            name: 'Pager',
            component: () => import('@/views/Components/pager/index.vue'),
            meta: {
              title: $t('dashboard.pager'), // 分页
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/collapse',
            name: 'Collapse',
            component: () => import('@/views/Components/collapse/index.vue'),
            meta: {
              title: $t('dashboard.collapse'), // 手风琴
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/tooltip',
            name: 'Tooltip',
            component: () => import('@/views/Components/tooltip/index.vue'),
            meta: {
              title: $t('dashboard.tooltip'), // 提示框
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/dropdown',
            name: 'Dropdown',
            component: () => import('@/views/Components/dropdown/index.vue'),
            meta: {
              title: $t('dashboard.dropdown'), // 下拉菜单
              fontIcon: 'fa-solid fa-gear',
            },
          },
        ],
      },
      {
        path: '/elementComponents',
        name: 'ElementComponents',
        component: () => import('@/views/ElementComponents/index.vue'),
        meta: {
          isShow: true,
          title: $t('element.name'),
          fontIcon: 'fa-solid fa-gear',
          toast: 'Element-Components',
        },
        children: [
          {
            path: '/elementDialog',
            name: 'ElementDialog',
            component: () =>
              import('@/views/ElementComponents/elementDialog/index.vue'),
            meta: {
              title: $t('element.dialog'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/elementMessage',
            name: 'ElementMessage',
            component: () =>
              import('@/views/ElementComponents/elementMessage/index.vue'),
            meta: {
              title: $t('element.message'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/fileUpload',
            name: 'FileUpload',
            component: () =>
              import('@/views/ElementComponents/fileUpload/index.vue'),
            meta: {
              title: $t('element.file_upload'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/checkCard',
            name: 'CheckCard',
            component: () =>
              import('@/views/ElementComponents/checkCard/index.vue'),
            meta: {
              title: $t('element.check_card'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/dateSelect',
            name: 'DateSelect',
            component: () =>
              import('@/views/ElementComponents/dateSelect/index.vue'),
            meta: {
              title: $t('element.data_select'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/dateTimePicker',
            name: 'DateTimePicker',
            component: () =>
              import('@/views/ElementComponents/dateTimePicker/index.vue'),
            meta: {
              title: $t('element.date_time_picker'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/timePicker',
            name: 'TimePicker',
            component: () =>
              import('@/views/ElementComponents/timePicker/index.vue'),
            meta: {
              title: $t('element.time_picker'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/iconSelect',
            name: 'IconSelect',
            component: () =>
              import('@/views/ElementComponents/iconSelect/index.vue'),
            meta: {
              title: $t('element.icon_select'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/animateCss',
            name: 'AnimateCss',
            component: () =>
              import('@/views/ElementComponents/animateCss/index.vue'),
            meta: {
              title: $t('element.animate_css'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/pictureCrop',
            name: 'PictureCrop',
            component: () =>
              import('@/views/ElementComponents/pictureCrop/index.vue'),
            meta: {
              title: $t('element.picture_crop'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/segmented',
            name: 'Segmented',
            component: () =>
              import('@/views/ElementComponents/segmented/index.vue'),
            meta: {
              title: $t('element.segmented'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/textEllipsis',
            name: 'TextEllipsis',
            component: () =>
              import('@/views/ElementComponents/textEllipsis/index.vue'),
            meta: {
              title: $t('element.text_ellipsis'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/button',
            name: 'Button',
            component: () =>
              import('@/views/ElementComponents/button/index.vue'),
            meta: {
              title: $t('dashboard.button'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/checkButton',
            name: 'CheckButton',
            component: () =>
              import('@/views/ElementComponents/checkButton/index.vue'),
            meta: {
              title: $t('element.check_button'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/dynamicButton',
            name: 'DynamicButton',
            component: () =>
              import('@/views/ElementComponents/dynamicButton/index.vue'),
            meta: {
              title: $t('element.dynamic_button'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
          {
            path: '/progress',
            name: 'Progress',
            component: () =>
              import('@/views/ElementComponents/progress/index.vue'),
            meta: {
              title: $t('element.progress'),
              fontIcon: 'fa-solid fa-gear',
            },
          },
        ],
      },
    ],
  },
];
