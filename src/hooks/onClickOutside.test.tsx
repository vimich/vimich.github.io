import * as React from 'react';
import { render, fireEvent, screen } from '../../test-utils/testUtil';
import { useOnClickOutside } from './onClickOutside';

const TestComp: React.FC = () => {
    const [testText, setTestText] = React.useState('no outside clicks');
    const ref = React.useRef(null);
    useOnClickOutside(ref, () => setTestText('outside clicked'));

    return (
        <div>
            <div ref={ref}>
                <p title="inside-p">{testText}</p>
            </div>
            <h1>Is outside</h1>
        </div>
    );
};

describe('onClickOutside Hook', () => {
    test('does not trigger click outside', () => {
        render(<TestComp />);

        fireEvent.mouseDown(screen.getByTitle('inside-p'));

        expect(screen.getByTitle('inside-p').textContent).toEqual(
            'no outside clicks'
        );
    });

    test('does trigger click outside', () => {
        render(<TestComp />);

        fireEvent.mouseDown(screen.getByText('Is outside'));

        expect(screen.getByTitle('inside-p').textContent).toEqual(
            'outside clicked'
        );
    });
});
