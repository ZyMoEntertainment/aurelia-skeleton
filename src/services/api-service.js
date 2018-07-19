import {inject, buildQueryString} from 'aurelia-framework';
import {Config} from 'aurelia-api';
import {json} from 'aurelia-fetch-client';

@inject(Config)
export class ApiService {
    constructor(endpoint) {
        this.endpoint = endpoint.getEndpoint('api');
    }

    async doGet(path, params) {
        if (params) {
            path += `?${buildQueryString(params)}`;
        }

        return await this.endpoint.find(path, null, 'json');
    }

    async doPost(path, body) {
        return await this.endpoint.post(path, json(body), 'json');
    }

    async doPut(path, body) {
        return await this.endpoint.update(path, null, json(body), 'json');
    }

    async doDelete(path) {
        return await this.endpoint.destroy(path);
    }
}
