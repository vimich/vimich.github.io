import * as React from 'react';

import { render } from '../../../test-utils/testUtil';
import { TestComp } from './TestComp';

describe(TestComp, () => {
    test('snapshot', () => {
        const wrapper = render(<TestComp />);
        expect(wrapper.asFragment()).toMatchSnapshot();
    });
});
