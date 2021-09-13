import * as React from 'react';

import { render } from '../../../test-utils/testUtil';
import { Task } from './Task';

import testImg from '../../assets/images/deployment.svg';

describe(Task, () => {
    test('snapshot', () => {
        const wrapper = render(
            <Task
                img={testImg}
                imgPlaceholder={testImg}
                intlPrefix="task.test"
                completed={true}
            />
        );
        expect(wrapper.asFragment()).toMatchSnapshot();
    });
});
