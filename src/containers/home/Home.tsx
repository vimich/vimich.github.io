import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';

import { colors } from '../../assets/styles';
import AcnLogo from '../../assets/images/Acc_Logo_White_Purple.svg';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const H1 = styled.h1`
    color: ${colors.gray};
    font-size: 4rem;
    line-height: 4rem;
    margin: 3rem 0;
`;

const H2 = styled.h2`
    color: ${colors.gray};
    font-size: 1.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
    color: ${colors.acnPurple1};
    margin: 0 0.25rem;
`;

const Img = styled.img`
    height: 1.75rem;
    margin: 0 0.5rem;
`;

const Home: React.FC = () => {
    return (
        <Container>
            <H1>Workshop i Git Actions</H1>
            <H2>
                Laget med
                <Icon icon={faHeart} fixedWidth={true} />
                av
                <Img src={AcnLogo} />
            </H2>
        </Container>
    );
};

export { Home };
