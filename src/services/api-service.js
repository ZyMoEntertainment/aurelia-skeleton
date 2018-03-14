import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class ApiService {
    constructor(httpClient) {
        this.http = httpClient;
    }

    async doGet(path) {
        const response = await this.http.fetch(path);
        return response.json();
    }

    async doDelete(path) {
        const response = await this.http.fetch(path, {
            method: 'delete'
        });

    }

    async doPut(path, data) {

        const response = await this.http.fetch(path, {
            method: 'put',
            body: json(data)
        });

        return response.json();
    }

    async doPost(path, data) {

        const response = await this.http.fetch(path, {
            method: 'post',
            body: json(data)
        });

        return response.json();
    }



}
