import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Header from '../header/Header';
import Footer from '../footer/FooterContainer';

//styles
import { ThemeStyles } from '../../styled-components/ThemeStyles.js';

// == CHUNKS ==
// conponents
const AsyncForm = lazy(() =>
  import('../form/FormContainer' /* webpackChunkName: "form-component" */),
);
const AsyncPopup = lazy(() =>
  import('../popup/PopupContainer' /* webpackChunkName: "popup-component" */),
);

// pages
const AsyncMain = lazy(() =>
  import('../../pages/main/MainContainer' /* webpackChunkName: "main-page" */),
);
const AsyncContacts = lazy(() =>
  import(
    '../../pages/contacts/ContactsContainer' /* webpackChunkName: "contacts-page" */
  ),
);
const AsyncDownload = lazy(() =>
  import(
    '../../pages/download/DownloadContainer' /* webpackChunkName: "download-page" */
  ),
);
const AsyncEducation = lazy(() =>
  import(
    '../../pages/education/EducationContainer' /* webpackChunkName: "education-page" */
  ),
);
const AsyncExperience = lazy(() =>
  import(
    '../../pages/experience/ExperienceContainer' /* webpackChunkName: "experience-page" */
  ),
);
const AsyncGeneral = lazy(() =>
  import(
    '../../pages/general/GeneralContainer' /* webpackChunkName: "general-page" */
  ),
);
const AsyncReason = lazy(() =>
  import(
    '../../pages/reason/ReasonContainer' /* webpackChunkName: "reason-page" */
  ),
);
const AsyncSalary = lazy(() =>
  import(
    '../../pages/salary/SalaryContainer' /* webpackChunkName: "salary-page" */
  ),
);
const AsyncSkills = lazy(() =>
  import(
    '../../pages/skills/SkillsContainer' /* webpackChunkName: "skills-page" */
  ),
);
const AsyncNotFound = lazy(() =>
  import(
    '../../pages/404/NotFoundContainer' /* webpackChunkName: "not-found" */
  ),
);

interface Props {
  theme: string;
  menu: boolean;
}

const App: React.FC<Props> = ({ theme, menu }) => (
  <>
    <ThemeStyles theme={theme} menu={menu} />

    <Header />

    <Suspense fallback={<div className="loder"></div>}>
      <AsyncPopup>
        <AsyncForm />
      </AsyncPopup>

      <Switch>
        <Route path="/" exact component={AsyncMain} />
        <Route path="/contacts" component={AsyncContacts} />
        <Route path="/download" component={AsyncDownload} />
        <Route path="/education" component={AsyncEducation} />
        <Route path="/experience" component={AsyncExperience} />
        <Route path="/general" component={AsyncGeneral} />
        <Route path="/reason" component={AsyncReason} />
        <Route path="/salary" component={AsyncSalary} />
        <Route path="/skills" component={AsyncSkills} />
        <Route component={AsyncNotFound} />
      </Switch>
    </Suspense>

    <Footer />
  </>
);

export default App;
