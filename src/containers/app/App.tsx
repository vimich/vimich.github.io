import * as React from 'react';
import { IntlProvider } from 'react-intl';
import styled from 'styled-components';

import GlobalStyle from '../../assets/styles/globalStyles';
import { colors } from '../../assets/styles';
import INITIAL_INTL_MESSAGES from '../../state/initial-intl-messages';

import '../../assets/styles/fonts.css';
import { Home } from '../home/Home';

const StyledApp = styled.main`
    display: flex;
    height: 100%;
    background: ${colors.lightBlack};
    align-content: center;
    justify-content: center;
`;
StyledApp.displayName = 'App';

const App: React.FC = () => {
    return (
        <IntlProvider
            messages={INITIAL_INTL_MESSAGES}
            locale="en"
            defaultLocale="en">
            <GlobalStyle />
            <StyledApp>
                <Home />
            </StyledApp>
        </IntlProvider>
    );
};

export default App;
