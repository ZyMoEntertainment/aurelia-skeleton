import {inject, buildQueryString} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {ApiError} from './api-error'

@inject(HttpClient)
export class ApiService {
    constructor(httpClient) {
        this.http = httpClient;
    }

    async get(path, params) {
        const options = {method: 'GET'};

        if (params) {
             path += `?${buildQueryString(params)}`
        }
        return this._request(path, options);
    }

    async delete(path) {
        const options = {method: 'DELETE'};
        return this._request(path, options);
    }

    async put(path, body) {
        return this._push(path, body, true);
    }

    async post(path, body) {
        return this._push(path, body);
    }

    async _push(path, body, asPut) {
        const options = {
            method: !asPut ? 'PUT' : 'POST',
            body: json(body)
        };
        return this._request(path, options);
    }

    async _request(path, options) {
        const result = await this.http.fetch(path, options);
        const status = result.status;
        if (status === 204) {
            return null;
        }

        const response = await result.json();

        if (status >= 200 && status < 400) {
            return response;
        }
        throw new ApiError(response);
    }



}
