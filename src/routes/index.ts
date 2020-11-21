import { lazy } from 'react';

const routes = {
  Root: {
    path: '/',
    component: lazy(
      () =>
        import(
          '../components/Pages/main/Main.container' /* webpackChunkName: "main-page" */
        ),
    ),
  },
  Contacts: {
    path: '/contacts',
    component: lazy(
      () =>
        import(
          '../components/Pages/contacts/Contacts.container' /* webpackChunkName: "contacts-page" */
        ),
    ),
  },
  Download: {
    path: '/download',
    component: lazy(
      () =>
        import(
          '../components/Pages/download/Download.container' /* webpackChunkName: "download-page" */
        ),
    ),
  },
  Education: {
    path: '/education',
    component: lazy(
      () =>
        import(
          '../components/Pages/education/Education.container' /* webpackChunkName: "education-page" */
        ),
    ),
  },
  Experience: {
    path: '/experience',
    component: lazy(
      () =>
        import(
          '../components/Pages/experience/Experience.container' /* webpackChunkName: "experience-page" */
        ),
    ),
  },
  General: {
    path: '/general',
    component: lazy(
      () =>
        import(
          '../components/Pages/general/General.container' /* webpackChunkName: "general-page" */
        ),
    ),
  },
  Reason: {
    path: '/reason',
    component: lazy(
      () =>
        import(
          '../components/Pages/reason/Reason.container' /* webpackChunkName: "reason-page" */
        ),
    ),
  },
  Salary: {
    path: '/salary',
    component: lazy(
      () =>
        import(
          '../components/Pages/salary/Salary.container' /* webpackChunkName: "salary-page" */
        ),
    ),
  },
  Skills: {
    path: '/skills',
    component: lazy(
      () =>
        import(
          '../components/Pages/skills/Skills.container' /* webpackChunkName: "skills-page" */
        ),
    ),
  },
  NotFound: {
    component: lazy(
      () =>
        import(
          '../components/Pages/404/NotFound.container' /* webpackChunkName: "not-found" */
        ),
    ),
  },
};

export default routes;
