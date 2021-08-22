import * as React from 'react';
import styled from 'styled-components';

import { colors } from '../../assets/styles';

interface ITestCompProps {
    className?: string;
}

const P = styled.p`
    color: ${colors.baseFontColor};
`;

const TestComp: React.FC<ITestCompProps> = () => {
    return <P>What a happy day</P>;
};

export { TestComp };
