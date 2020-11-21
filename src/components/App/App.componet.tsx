import React, { ReactElement, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../routes';
import { ThemeStyles } from '../../styled-components/ThemeStyles.js';
import Footer from '../Common/footer/Footer.container';
import Form from '../Common/form/Form.container';
import Header from '../Common/header/Header.component';
import Popup from '../Common/popup/Popup.container';

interface Props {
  theme: string;
  menu: boolean;
}

const App = ({ theme, menu }: Props): ReactElement => (
  <>
    <ThemeStyles theme={theme} menu={menu} />

    <Header />

    <Suspense fallback={null}>
      <Popup>
        <Form />
      </Popup>

      <Switch>
        <Route path={routes.Root.path} exact component={routes.Root.component} />
        <Route path={routes.Contacts.path} component={routes.Contacts.component} />
        <Route path={routes.Download.path} component={routes.Download.component} />
        <Route path={routes.Education.path} component={routes.Education.component} />
        <Route
          path={routes.Experience.path}
          component={routes.Experience.component}
        />
        <Route path={routes.General.path} component={routes.General.component} />
        <Route path={routes.Reason.path} component={routes.Reason.component} />
        <Route path={routes.Salary.path} component={routes.Salary.component} />
        <Route path={routes.Skills.path} component={routes.Skills.component} />
        <Route component={routes.NotFound.component} />
      </Switch>
    </Suspense>

    <Footer />
  </>
);

export default App;
