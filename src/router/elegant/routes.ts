/* prettier-ignore */
/* eslint-disable */
// Generated by elegant-router
// Read more: https://github.com/mufeng889/elegant-router
// Vue auto route: https://github.com/soybeanjs/elegant-router
// 请不要手动修改此文件，否则会导致优雅路由无法正常工作
// 如果需要修改，请在优雅路由配置文件中进行修改
// 这是自动生成的文件，请不要手动修改

//这里只能修改 handle 并且路由组作为布局路由组件 是不能有handle的

import type { ElegantConstRoute } from '@soybean-react/vite-plugin-react-router';

export const generatedRoutes: ElegantConstRoute[] = [
  {
    matchedFiles: ['root', '/src/pages/index.tsx', '/src/pages/loading.tsx', 'root'],
    name: 'root',
    path: '/',
    handle: { i18nKey: 'route.root', title: 'root', constant: true },
    children: [
      {
        matchedFiles: ['(base)', null, null, null],
        name: '(base)',
        children: [
          {
            matchedFiles: [null, '/src/pages/(base)/about/index.tsx', null, null],
            name: '(base)_about',
            path: '/about',
            handle: { i18nKey: 'route.(base)_about', title: '(base)_about' }
          },
          {
            matchedFiles: [null, '/src/pages/(base)/function/index.tsx', null, null],
            name: '(base)_function',
            path: '/function',
            handle: { i18nKey: 'route.(base)_function', title: '(base)_function' },
            children: [
              {
                matchedFiles: [null, '/src/pages/(base)/function/event-bus/index.tsx', null, null],
                name: '(base)_function_event-bus',
                path: '/function/event-bus',
                handle: { i18nKey: 'route.(base)_function_event-bus', title: '(base)_function_event-bus' }
              },
              {
                matchedFiles: [null, '/src/pages/(base)/function/hide-child/index.tsx', null, null],
                name: '(base)_function_hide-child',
                path: '/function/hide-child',
                handle: { i18nKey: 'route.(base)_function_hide-child', title: '(base)_function_hide-child' },
                children: [
                  {
                    matchedFiles: [null, '/src/pages/(base)/function/hide-child/one/index.tsx', null, null],
                    name: '(base)_function_hide-child_one',
                    path: '/function/hide-child/one',
                    handle: { i18nKey: 'route.(base)_function_hide-child_one', title: '(base)_function_hide-child_one' }
                  },
                  {
                    matchedFiles: [null, '/src/pages/(base)/function/hide-child/three/index.tsx', null, null],
                    name: '(base)_function_hide-child_three',
                    path: '/function/hide-child/three',
                    handle: {
                      i18nKey: 'route.(base)_function_hide-child_three',
                      title: '(base)_function_hide-child_three'
                    }
                  },
                  {
                    matchedFiles: [null, '/src/pages/(base)/function/hide-child/two/index.tsx', null, null],
                    name: '(base)_function_hide-child_two',
                    path: '/function/hide-child/two',
                    handle: { i18nKey: 'route.(base)_function_hide-child_two', title: '(base)_function_hide-child_two' }
                  }
                ]
              },
              {
                matchedFiles: [null, '/src/pages/(base)/function/multi-tab/index.tsx', null, null],
                name: '(base)_function_multi-tab',
                path: '/function/multi-tab',
                handle: { i18nKey: 'route.(base)_function_multi-tab', title: '(base)_function_multi-tab' }
              },
              {
                matchedFiles: [null, '/src/pages/(base)/function/request/index.tsx', null, null],
                name: '(base)_function_request',
                path: '/function/request',
                handle: { i18nKey: 'route.(base)_function_request', title: '(base)_function_request' }
              },
              {
                matchedFiles: [null, '/src/pages/(base)/function/super-page/index.tsx', null, null],
                name: '(base)_function_super-page',
                path: '/function/super-page',
                handle: { i18nKey: 'route.(base)_function_super-page', title: '(base)_function_super-page' }
              },
              {
                matchedFiles: [null, '/src/pages/(base)/function/tab/index.tsx', null, null],
                name: '(base)_function_tab',
                path: '/function/tab',
                handle: { i18nKey: 'route.(base)_function_tab', title: '(base)_function_tab' }
              },
              {
                matchedFiles: [null, '/src/pages/(base)/function/toggle-auth/index.tsx', null, null],
                name: '(base)_function_toggle-auth',
                path: '/function/toggle-auth',
                handle: { i18nKey: 'route.(base)_function_toggle-auth', title: '(base)_function_toggle-auth' }
              }
            ]
          },
          {
            matchedFiles: [null, '/src/pages/(base)/home/index.tsx', null, null],
            name: '(base)_home',
            path: '/home',
            handle: {  i18nKey: 'route.(base)_home',
              icon: 'mdi:monitor-dashboard',
              order: 1,
              title: 'home'
            }
          },
          {
            matchedFiles: [null, '/src/pages/(base)/manage/index.tsx', null, null],
            name: '(base)_manage',
            path: '/manage',
            handle: { i18nKey: 'route.(base)_manage', title: '(base)_manage' },
            children: [
              {
                matchedFiles: [null, '/src/pages/(base)/manage/menu/index.tsx', null, null],
                name: '(base)_manage_menu',
                path: '/manage/menu',
                handle: { i18nKey: 'route.(base)_manage_menu', title: '(base)_manage_menu' }
              },
              {
                matchedFiles: [null, '/src/pages/(base)/manage/role/index.tsx', null, null],
                name: '(base)_manage_role',
                path: '/manage/role',
                handle: { i18nKey: 'route.(base)_manage_role', title: '(base)_manage_role' }
              },
              {
                matchedFiles: [null, '/src/pages/(base)/manage/user/index.tsx', null, null],
                name: '(base)_manage_user',
                path: '/manage/user',
                handle: { i18nKey: 'route.(base)_manage_user', title: '(base)_manage_user' },
                children: [
                  {
                    matchedFiles: [null, '/src/pages/(base)/manage/user/[id].tsx', null, null],
                    name: '(base)_manage_user_[id]',
                    path: '/manage/user/:id',
                    handle: { i18nKey: 'route.(base)_manage_user_[id]', title: '(base)_manage_user_[id]' }
                  }
                ]
              }
            ]
          },
          {
            matchedFiles: [null, '/src/pages/(base)/multi-menu/index.tsx', null, null],
            name: '(base)_multi-menu',
            path: '/multi-menu',
            handle: { i18nKey: 'route.(base)_multi-menu', title: '(base)_multi-menu' },
            children: [
              {
                matchedFiles: [null, '/src/pages/(base)/multi-menu/first/index.tsx', null, null],
                name: '(base)_multi-menu_first',
                path: '/multi-menu/first',
                handle: { i18nKey: 'route.(base)_multi-menu_first', title: '(base)_multi-menu_first' },
                children: [
                  {
                    matchedFiles: [null, '/src/pages/(base)/multi-menu/first/child/index.tsx', null, null],
                    name: '(base)_multi-menu_first_child',
                    path: '/multi-menu/first/child',
                    handle: { i18nKey: 'route.(base)_multi-menu_first_child', title: '(base)_multi-menu_first_child' }
                  }
                ]
              },
              {
                matchedFiles: [null, '/src/pages/(base)/multi-menu/second/index.tsx', null, null],
                name: '(base)_multi-menu_second',
                path: '/multi-menu/second',
                handle: { i18nKey: 'route.(base)_multi-menu_second', title: '(base)_multi-menu_second' },
                children: [
                  {
                    matchedFiles: [null, '/src/pages/(base)/multi-menu/second/child/index.tsx', null, null],
                    name: '(base)_multi-menu_second_child',
                    path: '/multi-menu/second/child',
                    handle: {
                      i18nKey: 'route.(base)_multi-menu_second_child',
                      title: '(base)_multi-menu_second_child'
                    },
                    children: [
                      {
                        matchedFiles: [null, '/src/pages/(base)/multi-menu/second/child/home/index.tsx', null, null],
                        name: '(base)_multi-menu_second_child_home',
                        path: '/multi-menu/second/child/home',
                        handle: {
                          i18nKey: 'route.(base)_multi-menu_second_child_home',
                          title: '(base)_multi-menu_second_child_home'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            matchedFiles: [null, '/src/pages/(base)/projects/index.tsx', null, null],
            name: '(base)_projects',
            path: '/projects',
            handle: { i18nKey: 'route.(base)_projects', title: '(base)_projects' },
            children: [
              {
                matchedFiles: [null, '/src/pages/(base)/projects/[pid]/index.tsx', null, null],
                name: '(base)_projects_[pid]',
                path: '/projects/:pid',
                handle: { i18nKey: 'route.(base)_projects_[pid]', title: '(base)_projects_[pid]' },
                children: [
                  {
                    matchedFiles: [null, '/src/pages/(base)/projects/[pid]/edit/index.tsx', null, null],
                    name: '(base)_projects_[pid]_edit',
                    path: '/projects/:pid/edit',
                    handle: { i18nKey: 'route.(base)_projects_[pid]_edit', title: '(base)_projects_[pid]_edit' },
                    children: [
                      {
                        matchedFiles: [null, '/src/pages/(base)/projects/[pid]/edit/[id].tsx', null, null],
                        name: '(base)_projects_[pid]_edit_[id]',
                        path: '/projects/:pid/edit/:id',
                        handle: {
                          i18nKey: 'route.(base)_projects_[pid]_edit_[id]',
                          title: '(base)_projects_[pid]_edit_[id]'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            matchedFiles: [null, '/src/pages/(base)/user-center/index.tsx', null, null],
            name: '(base)_user-center',
            path: '/user-center',
            handle: { i18nKey: 'route.(base)_user-center', title: '(base)_user-center' }
          }
        ],
        path: null
      },
      {
        matchedFiles: ['(blank)', null, null, null],
        name: '(blank)',
        children: [
          {
            matchedFiles: ['(blank)_login', '/src/pages/(blank)/login/index.tsx', null, null],
            name: '(blank)_login',
            path: '/login',
            handle: { i18nKey: 'route.(blank)_login', title: '(blank)_login', constant: true },
            children: [
              {
                matchedFiles: [null, '/src/pages/(blank)/login/code-login/index.tsx', null, null],
                name: '(blank)_login_code-login',
                path: '/login/code-login',
                handle: { i18nKey: 'route.(blank)_login_code-login', title: '(blank)_login_code-login', constant: true }
              },
              {
                matchedFiles: [null, '/src/pages/(blank)/login/register/index.tsx', null, null],
                name: '(blank)_login_register',
                path: '/login/register',
                handle: { i18nKey: 'route.(blank)_login_register', title: '(blank)_login_register', constant: true }
              },
              {
                matchedFiles: [null, '/src/pages/(blank)/login/reset-pwd/index.tsx', null, null],
                name: '(blank)_login_reset-pwd',
                path: '/login/reset-pwd',
                handle: { i18nKey: 'route.(blank)_login_reset-pwd', title: '(blank)_login_reset-pwd', constant: true }
              }
            ]
          }
        ],
        path: null
      },
      {
        matchedFiles: [null, '/src/pages/_builtin/403/index.tsx', null, null],
        name: '403',
        path: '/403',
        handle: { i18nKey: 'route.403', title: '403', constant: true }
      },
      {
        matchedFiles: [null, '/src/pages/_builtin/404/index.tsx', null, null],
        name: '404',
        path: '/404',
        handle: { i18nKey: 'route.404', title: '404', constant: true }
      },
      {
        matchedFiles: [null, '/src/pages/_builtin/500/index.tsx', null, null],
        name: '500',
        path: '/500',
        handle: { i18nKey: 'route.500', title: '500', constant: true }
      },
      {
        matchedFiles: [null, '/src/pages/_builtin/iframe-page/index.tsx', null, null],
        name: 'iframe-page',
        path: '/iframe-page',
        handle: { i18nKey: 'route.iframe-page', title: 'iframe-page', constant: true }
      },
      {
        matchedFiles: [null, '/src/pages/_builtin/404/index.tsx', null, null],
        name: 'notFound',
        path: '*',
        handle: { i18nKey: 'route.notFound', title: 'notFound', constant: true }
      }
    ]
  }
];
