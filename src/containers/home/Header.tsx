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
    margin-bottom: 1rem; 
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
                {/* This is where you can change the page title */}
                {/* --------- EDIT LINE BELOW ----------------- */}
                <H1>This is the wrong title🤨</H1>
                {/* ------------------------------------------- */}
                <Img src={AcnLogo} />
            </TitleAndLogo>
            <P>
                GitHub Actions gjør det enkelt å automatisere alle workflows til din programvareutvikling. I denne workshopen
                skal du sette opp flere ulike workflows som er beskrevet i hver sin røde boks i denne nettsiden. Din oppgave
                er å implementere jobber i workflowen som løser oppgavene under. Disse endringene pusher du til develop branch.
                Da vil workflowen starte. Om syntaksen er riktig vil du få en oppdatert versjon av nettsiden, og hvis du har
                lagt inn riktig action for å løse en av oppgavene vil de bli grønne. Link til repoet finner du <a href="https://github.com/acntech/workshop-github-actions">her </a>
            </P>
            <P>
                Husk å benytte <a href="https://docs.github.com/en/actions">github actions </a> dokumentasjonen,
                den tilbyr mye god hjelp. Hint: det finnes eksempler på å sette opp prosesser for å <a href="https://docs.github.com/en/actions/guides/building-and-testing-nodejs-or-python">teste og bygge </a> node.js apper.
            </P>
            <H2>Du har nå {props.tp || 0} poeng!</H2>
        </Container>
    );
};

export { Header };
