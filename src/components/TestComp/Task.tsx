import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { colors } from '../../assets/styles';

interface ITaskProps {
    completed: boolean;
    isBadgeFirst?: boolean;
    img: string;
    imgPlaceholder: string;
    intlPrefix: string;
    className?: string;
}

const Container = styled.section<{ completed: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20vh;
    padding: 1rem 20%;
    box-shadow: 0px -1px 0px 0px ${colors.fontColorLight};
    background-color: ${props =>
        props.completed ? colors.greenSuccess : colors.redUnsuccessful};
`;

const BadgeContainer = styled.div<{ reverseOrder: boolean }>`
    display: flex;
    width: 100%;
    flex-direction: ${props => (props.reverseOrder ? 'row-reverse' : 'row')};
    margin-top: 1rem;
`;

const Badge = styled.img<{ reverseOrder: boolean }>`
    height: 4rem;
    margin: ${props => (props.reverseOrder ? '0 0 0 1rem' : '0 1rem 0 0')};
`;

const H3 = styled.h3<{ reverseOrder: boolean }>`
    font-size: 1.5rem;
    text-align: ${props => (props.reverseOrder ? 'end' : 'start')};
    color: ${colors.fontColorLight};
`;

const P = styled.p`
    color: ${colors.fontColorLight};
    margin: auto 0;
`;

const Task: React.FC<ITaskProps> = props => {
    return (
        <Container completed={props.completed} className={props.className}>
            <H3 reverseOrder={!props.isBadgeFirst}>
                <FormattedMessage id={`${props.intlPrefix}.title`} />
            </H3>
            <BadgeContainer reverseOrder={!props.isBadgeFirst}>
                <Badge
                    reverseOrder={!props.isBadgeFirst}
                    src={props.completed ? props.img : props.imgPlaceholder}
                />
                <P>
                    <FormattedMessage id={`${props.intlPrefix}.text`} />
                </P>
            </BadgeContainer>
        </Container>
    );
};

export { Task };
