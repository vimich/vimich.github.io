import * as React from 'react';

import { render, screen } from '../../../test-utils/testUtil';
import { Header } from './Header';

describe('Header', () => {
    test('Header name', () => {
        render(<Header tp={0} />);

        expect(screen.getByRole('heading', { level: 1 })).toEqual(
            //////////////////////////
            // Expected page title
            //
            'Github Actions Workshop'
            //////////////////////////
        );
    });
});
