import * as React from 'react';

import { render, screen } from '../../../test-utils/testUtil';
import { Home } from './Home';

describe(Home, () => {
    test('expected elements of Home', () => {
        render(<Home />);

        expect(screen.getAllByRole('heading')).toHaveLength(2);
        expect(screen.getByText('Workshop i Git Actions')).toBeDefined();
        expect(screen.getByRole('img')).toBeDefined();
    });
});
