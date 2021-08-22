import * as React from 'react';

/**
 Hook to detect click outside an element.
 Callback is called on click outside.
 */
export const useOnClickOutside = (
    ref: React.MutableRefObject<HTMLElement>,
    callback: () => void
): void => {
    React.useEffect(() => {
        function listener(event: MouseEvent): void {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }

            callback();
        }

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, callback]);
};
