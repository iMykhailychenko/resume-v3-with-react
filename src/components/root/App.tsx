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
  import('../../pages/main/Main' /* webpackChunkName: "home-page" */),
);
const AsyncContacts = lazy(() =>
  import('../../pages/contacts/ContactsContainer' /* webpackChunkName: "home-page" */),
);
const AsyncDownload = lazy(() =>
  import('../../pages/download/Download' /* webpackChunkName: "home-page" */),
);
const AsyncEducation = lazy(() =>
  import('../../pages/education/Education' /* webpackChunkName: "home-page" */),
);
const AsyncExperience = lazy(() =>
  import(
    '../../pages/experience/Experience' /* webpackChunkName: "home-page" */
  ),
);
const AsyncGeneral = lazy(() =>
  import('../../pages/general/General' /* webpackChunkName: "home-page" */),
);
const AsyncReason = lazy(() =>
  import('../../pages/reason/Reason' /* webpackChunkName: "home-page" */),
);
const AsyncSalary = lazy(() =>
  import('../../pages/salary/Salary' /* webpackChunkName: "home-page" */),
);
const AsyncSkills = lazy(() =>
  import('../../pages/skills/Skills' /* webpackChunkName: "home-page" */),
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
          </Switch>
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default App;
