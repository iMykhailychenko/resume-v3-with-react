import React, { ReactElement } from 'react';

import css from './Warning.module.css';

const Warning = (): ReactElement => {
    return (
        <div className={css.root}>
            <div>
                <h3>Attention! This site is very old.</h3>
                <p>
                    I don&apos;t have the time or desire to constantly update it. Therefore, check the information
                    directly with me
                </p>
            </div>
        </div>
    );
};

export default Warning;
