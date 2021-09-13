import * as React from 'react';
import styled from 'styled-components';

import AcnLogo from '../../assets/images/Acc_GT_Solid_P1_RGB.svg';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 1rem 10%;
    margin-bottom: 2rem;
`;

const TitleAndLogo = styled.div`
    display: flex;
    justify-content: space-between;
`;

const H1 = styled.h1`
    font-size: 3rem;
    line-height: 3rem;
`;

const H2 = styled.h2`
    font-size: 2rem;
    line-height: 2rem;
`;

const P = styled.p`
    margin: 1rem 0;
`;

const Img = styled.img`
    height: 2.5rem;
`;

const Header: React.FC<{ tp: number }> = props => {
    return (
        <Container>
            <TitleAndLogo>
                <H1>Github Actions Works</H1>
                <Img src={AcnLogo} />
            </TitleAndLogo>
            <P>
                GitHub Actions makes it easy to automate all your software
                workflows, now with world-class CI/CD. Build, test, and deploy
                your code right from GitHub. Make code reviews, branch
                BLABETIBLA - include more text and links and links and and links
                and links to resources
            </P>
            <H2>Du har nå {props.tp || 0} poeng!</H2>
        </Container>
    );
};

export { Header };
