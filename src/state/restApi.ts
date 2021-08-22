import * as _ from 'lodash';

const BASE_URL = '';
const CONTENT_TYPE = 'application/json';
const ALLOW_CREDENTIALS = 'same-origin';

type RequestMethodType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

enum HttpResponseCode {
    OK = 200,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    SERVER_ERROR = 500,
    UNAUTHORIZED = 401,
    CONFLICT = 409,
    FORBIDDEN = 403
}

interface IParameterMap {
    [index: string]: string | number | boolean;
}

interface IApiConfig {
    url: string;
}

type IdParamType = string | number;

interface IRestApi {
    get: (
        id?: IdParamType,
        queryParams?: IParameterMap,
        resourceUrl?: string,
        options?: Record<string, unknown>
    ) => Promise<unknown>;
    getFile: (options?: Record<string, unknown>) => Promise<unknown>;
    post: (
        body: unknown,
        id?: IdParamType,
        queryParams?: IParameterMap,
        resourceUrl?: string,
        options?: Record<string, unknown>
    ) => Promise<unknown>;
    patch: (
        body: unknown,
        id?: IdParamType,
        queryParams?: IParameterMap,
        resourceUrl?: string,
        options?: Record<string, unknown>,
        action?: string
    ) => Promise<unknown>;
    delete: (
        id: IdParamType,
        queryParams?: IParameterMap,
        resourceUrl?: string,
        options?: Record<string, unknown>
    ) => Promise<unknown>;
}

class RestApi implements IRestApi {
    private config: IApiConfig;

    public constructor(url: string) {
        this.config = { url };
    }

    public get = async (
        id?: IdParamType,
        queryParams?: IParameterMap,
        resourceUrl?: string,
        options?: Record<string, unknown>
    ): Promise<unknown> => {
        try {
            const response = await fetch(
                this.buildRequestUrl(resourceUrl, id, queryParams),
                this.apiConfig('GET', null, options)
            );
            return this.handleResponse(response);
        } catch (err) {
            return this.handleUnknownError(err);
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public getFile = (options?: Record<string, unknown>): Promise<any> =>
        fetch(
            this.buildRequestUrl(),
            this.apiConfig('GET', null, options)
        ).then(res => this.handleResponse(res, true));

    public post = async (
        body: unknown,
        id?: IdParamType,
        queryParams?: IParameterMap,
        resourceUrl?: string,
        options?: Record<string, unknown>
    ): Promise<unknown> => {
        try {
            const response = await fetch(
                this.buildRequestUrl(resourceUrl, id, queryParams),
                this.apiConfig('POST', body, options)
            );
            return this.handleResponse(response);
        } catch (err) {
            return this.handleUnknownError(err);
        }
    };

    public patch = async (
        body: unknown,
        id?: IdParamType,
        queryParams?: IParameterMap,
        resourceUrl?: string,
        options?: Record<string, unknown>
    ): Promise<unknown> => {
        try {
            const response = await fetch(
                this.buildRequestUrl(resourceUrl, id, queryParams),
                this.apiConfig('PATCH', body, options)
            );
            return this.handleResponse(response);
        } catch (err) {
            return this.handleUnknownError(err);
        }
    };

    public delete = async (
        id: IdParamType,
        queryParams?: IParameterMap,
        resourceUrl?: string,
        options?: Record<string, unknown>
    ): Promise<unknown> => {
        try {
            const response = await fetch(
                this.buildRequestUrl(resourceUrl, id, queryParams),
                this.apiConfig('DELETE', null, options)
            );
            return this.handleResponse(response);
        } catch (err) {
            return this.handleUnknownError(err);
        }
    };

    private handleResponse = (
        response: Response,
        isGetFile?: boolean
    ): Promise<unknown> => {
        if (response.status === HttpResponseCode.NO_CONTENT) {
            return Promise.resolve(null);
        }

        if (response.status === HttpResponseCode.NOT_FOUND) {
            return response.json().then(responseBody => {
                return Promise.resolve({
                    ...responseBody,
                    errorId: 'not.found'
                });
            });
        }

        if (response.status === HttpResponseCode.BAD_REQUEST) {
            return response.json().then(responseBody => {
                return Promise.resolve({
                    ...responseBody,
                    errorId: 'bad.request'
                });
            });
        }

        if (response.status === HttpResponseCode.CONFLICT) {
            return response.json().then(responseBody => {
                return Promise.resolve({
                    ...responseBody,
                    errorId: 'conflict'
                });
            });
        }

        if (
            response.status === HttpResponseCode.UNAUTHORIZED ||
            response.status === HttpResponseCode.FORBIDDEN
        ) {
            return Promise.resolve({
                errorCode: 'Unauthorized',
                errorId: 'bad.request'
            });
        }

        if (response.status === HttpResponseCode.SERVER_ERROR) {
            return response.json().then(responseBody => {
                return Promise.resolve({
                    ...responseBody,
                    errorId: 'server.error'
                });
            });
        }

        if (isGetFile) {
            return Promise.resolve(response);
        }

        if (response.status === HttpResponseCode.OK) {
            return response.json().then(
                (responseBody: unknown) => {
                    return Promise.resolve(responseBody);
                },
                () => Promise.resolve({ status: HttpResponseCode.OK })
            );
        }

        return this.handleUnknownError(response);
    };

    private handleUnknownError = (err: unknown) => {
        return Promise.resolve({
            errorId: 'error.unknown',
            error: err,
            errorCode: 'UnknownError'
        });
    };

    private apiConfig = (
        method: RequestMethodType,
        body?: unknown,
        options?: Record<string, unknown>
    ) => {
        const headers = new Headers();
        headers.append('content-type', CONTENT_TYPE);

        const defaultConf: RequestInit = {
            method,
            credentials: ALLOW_CREDENTIALS,
            headers
        };

        if (body) {
            defaultConf.body = JSON.stringify(body);
        }

        return _.merge(defaultConf, options);
    };

    private buildRequestUrl = (
        url?: string,
        queryId?: string | number,
        queryParams?: IParameterMap
    ) => {
        let resourceSegment = `${BASE_URL}${url || this.config.url}`;

        if (queryId) {
            resourceSegment = `${resourceSegment}/${queryId}`;
        }

        if (!_.isEmpty(queryParams)) {
            resourceSegment = `${resourceSegment}?${this.formatQueryParams(
                queryParams
            )}`;
        }

        return encodeURI(resourceSegment);
    };

    private formatQueryParams(obj: IParameterMap): string {
        return _.keys(obj)
            .map(key =>
                !_.isUndefined(obj[key]) ? `${key}=${obj[key].toString()}` : ''
            )
            .join('&');
    }
}

export { BASE_URL, RestApi, HttpResponseCode };
