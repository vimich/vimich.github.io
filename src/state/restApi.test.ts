/* eslint-disable @typescript-eslint/no-floating-promises */
import { RestApi } from './restApi';

const testBody = { ok: 200 };
const testQueryParams = { hey: 'hi', value: 2 };

describe.only('RestApi', () => {
    const api = new RestApi('/test');

    describe('test header and call configuration', () => {
        const fetchMock = jest
            .fn()
            .mockReturnValue(JSON.stringify({ data: '12345' }));
        window.fetch = fetchMock;

        beforeEach(() => {
            jest.resetAllMocks();
        });

        test('get()', () => {
            api.get('123', testQueryParams);

            expect(fetchMock).toBeCalledTimes(1);
            expect(fetchMock).toHaveBeenCalledWith(
                expect.stringContaining('test/123?hey=hi&value=2'),
                expect.objectContaining({
                    method: 'GET'
                })
            );
        });

        test('post()', () => {
            api.post(testBody, '123', testQueryParams);

            expect(fetchMock).toBeCalledTimes(1);
            expect(fetchMock).toHaveBeenCalledWith(
                expect.stringContaining('test/123?hey=hi&value=2'),
                expect.objectContaining({
                    method: 'POST',
                    body: JSON.stringify(testBody)
                })
            );
        });

        test('patch()', () => {
            api.patch(testBody, '123', testQueryParams);

            expect(fetchMock).toBeCalledTimes(1);
            expect(fetchMock).toHaveBeenCalledWith(
                expect.stringContaining('test/123?hey=hi&value=2'),
                expect.objectContaining({
                    method: 'PATCH',
                    body: JSON.stringify(testBody)
                })
            );
        });

        test('delete()', () => {
            api.delete('123', testQueryParams);

            expect(fetchMock).toBeCalledTimes(1);
            expect(fetchMock).toHaveBeenCalledWith(
                expect.stringContaining('test/123?hey=hi&value=2'),
                expect.objectContaining({
                    method: 'DELETE'
                })
            );
        });
    });
});
