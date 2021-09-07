import * as React from 'react';
import { IntlProvider } from 'react-intl';

import { render } from '../../../test-utils/testUtil';
import { Task } from './Task';

import testImg from '../../assets/images/deployment.svg';

const testInitalMessages = {
    'test.text': 'test text',
    'test.text.title': 'test title',
    'test.text.text': 'test text text',
    'test.tooltip': 'test tooltip',
    'test.dummy': 'test dummy',
    'test.key': 'test key'
};

describe(Task, () => {
    test('snapshot', () => {
        const wrapper = render(
            <IntlProvider
                messages={testInitalMessages}
                locale="en"
                defaultLocale="en">
                <Task
                    img={testImg}
                    imgPlaceholder={testImg}
                    intlPrefix="test.text"
                    completed={true}
                />
            </IntlProvider>
        );
        expect(wrapper.asFragment()).toMatchSnapshot();
    });
});
