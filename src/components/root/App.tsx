import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Header from '../header/Header';
import Footer from '../footer/FooterContainer';
import Popup from '../popup/PopupContainer';
import FormComponent from '../form/FormContainer';

//styles
import { ThemeStyles } from '../../styled-components/ThemeStyles.js';

// chunks
const AsyncMain = lazy(() =>
  import('../../pages/main/MainContainer' /* webpackChunkName: "home-page" */),
);
const AsyncContacts = lazy(() =>
  import('../../pages/contacts/ContactsContainer' /* webpackChunkName: "home-page" */),
);
const AsyncDownload = lazy(() =>
  import('../../pages/download/DownloadContainer' /* webpackChunkName: "home-page" */),
);
const AsyncEducation = lazy(() =>
  import('../../pages/education/EducationContainer' /* webpackChunkName: "home-page" */),
);
const AsyncExperience = lazy(() =>
  import(
    '../../pages/experience/ExperienceContainer' /* webpackChunkName: "home-page" */
  ),
);
const AsyncGeneral = lazy(() =>
  import('../../pages/general/GeneralContainer' /* webpackChunkName: "home-page" */),
);
const AsyncReason = lazy(() =>
  import('../../pages/reason/ReasonContainer' /* webpackChunkName: "home-page" */),
);
const AsyncSalary = lazy(() =>
  import('../../pages/salary/SalaryContainer' /* webpackChunkName: "home-page" */),
);
const AsyncSkills = lazy(() =>
  import('../../pages/skills/SkillsContainer' /* webpackChunkName: "home-page" */),
);
const AsyncNotFound = lazy(() =>
  import('../../pages/404/NotFoundContainer' /* webpackChunkName: "not-found" */),
);


interface Props {
  theme: string;
  menu: boolean;
}

const App: React.FC<Props> = ({ theme, menu }) => {
  return (
    <>
      <ThemeStyles theme={theme} menu={menu} />
      <Header />
      <Popup>
        <FormComponent />
      </Popup>

      <main className="container">
        <Suspense fallback={<div className="loder"></div>}>
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
      </main>

      <Footer />
    </>
  );
};

export default App;
