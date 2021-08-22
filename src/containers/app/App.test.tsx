import * as React from 'react';

import { render, screen } from '../../../test-utils/testUtil';
import App from './App';

describe(App, () => {
    test('snapshot', () => {
        render(<App />);
        expect(screen.getAllByRole('main')).toHaveLength(1);
    });
});
