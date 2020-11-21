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
          '../components/Pages/contacts/ContactsContainer' /* webpackChunkName: "contacts-page" */
        ),
    ),
  },
  Download: {
    path: '/download',
    component: lazy(
      () =>
        import(
          '../components/Pages/download/DownloadContainer' /* webpackChunkName: "download-page" */
        ),
    ),
  },
  Education: {
    path: '/education',
    component: lazy(
      () =>
        import(
          '../components/Pages/education/EducationContainer' /* webpackChunkName: "education-page" */
        ),
    ),
  },
  Experience: {
    path: '/experience',
    component: lazy(
      () =>
        import(
          '../components/Pages/experience/ExperienceContainer' /* webpackChunkName: "experience-page" */
        ),
    ),
  },
  General: {
    path: '/general',
    component: lazy(
      () =>
        import(
          '../components/Pages/general/GeneralContainer' /* webpackChunkName: "general-page" */
        ),
    ),
  },
  Reason: {
    path: '/reason',
    component: lazy(
      () =>
        import(
          '../components/Pages/reason/ReasonContainer' /* webpackChunkName: "reason-page" */
        ),
    ),
  },
  Salary: {
    path: '/salary',
    component: lazy(
      () =>
        import(
          '../components/Pages/salary/SalaryContainer' /* webpackChunkName: "salary-page" */
        ),
    ),
  },
  Skills: {
    path: '/skills',
    component: lazy(
      () =>
        import(
          '../components/Pages/skills/SkillsContainer' /* webpackChunkName: "skills-page" */
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
