/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { render, RenderOptions } from '@testing-library/react';
import * as React from 'react';
import { IntlProvider } from 'react-intl';

import INITIAL_INTL_MESSAGES from '../src/state/initial-intl-messages';

const TestWrappers: React.FC = ({ children }) => (
    <IntlProvider
        messages={INITIAL_INTL_MESSAGES}
        locale="en"
        defaultLocale="en">
        {children}
    </IntlProvider>
);

const customRender = (
    ui: React.ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: TestWrappers, ...options });

export * from '@testing-library/react';
export { customRender as render };
