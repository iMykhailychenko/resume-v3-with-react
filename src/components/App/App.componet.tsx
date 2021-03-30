import React, { Component, ReactElement, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../routes';
import { ThemeStyles } from '../../styled-components/ThemeStyles.js';
import { Locale } from '../../types';
import Footer from '../Common/footer/Footer.container';
import Form from '../Common/form/Form.container';
import Header from '../Common/header/Header.component';
import Popup from '../Common/popup/Popup.container';
import ScrollTopBtn from '../Common/scroll-top-btn/ScrollTopBtn.component';

interface Props {
    theme: string;
    menu: boolean;
    locale: Locale;
    toggleContent: (locale: Locale) => void;
}

class App extends Component<Props> {
    componentDidMount(): void {
        this.props.toggleContent(this.props.locale);
    }

    render(): ReactElement {
        const { theme, menu } = this.props;
        return (
            <>
                <ThemeStyles theme={theme} menu={menu} />

                <Header />
                <ScrollTopBtn />

                <main className="main">
                    <Suspense fallback={<div className="loader" />}>
                        <Popup>
                            <Form />
                        </Popup>

                        <Switch>
                            <Route path={routes.Root.path} exact component={routes.Root.component} />
                            <Route path={routes.Contacts.path} component={routes.Contacts.component} />
                            <Route path={routes.Download.path} component={routes.Download.component} />
                            <Route path={routes.Education.path} component={routes.Education.component} />
                            <Route path={routes.Experience.path} component={routes.Experience.component} />
                            <Route path={routes.General.path} component={routes.General.component} />
                            <Route path={routes.Reason.path} component={routes.Reason.component} />
                            <Route path={routes.Salary.path} component={routes.Salary.component} />
                            <Route path={routes.Skills.path} component={routes.Skills.component} />
                            <Route component={routes.NotFound.component} />
                        </Switch>
                    </Suspense>
                </main>
                <Footer />
            </>
        );
    }
}

export default App;
