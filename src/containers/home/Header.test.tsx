import * as React from 'react';

import { render, screen } from '../../../test-utils/testUtil';
import { Header } from './Header';

describe('Header', () => {
    test('Header name', () => {
        render(<Header tp={0} />);

        //
        // Expected page title
        //
        expect(screen.getByTestId('h1-title').innerHTML).toEqual(
            'Github Actions Workshop'
        );
    });
});
