import * as React from 'react';
import styled from 'styled-components';

import { Header } from './Header';
import { TaskList } from './TaskList';

const Container = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: 100%;
`;

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <TaskList />
        </Container>
    );
};

export { Home };
