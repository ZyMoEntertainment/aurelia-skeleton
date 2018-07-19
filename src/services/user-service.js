
import {inject} from 'aurelia-framework';
import {ApiService} from './api-service';
import {AuthService} from 'aurelia-auth';

@inject(ApiService)
@inject(AuthService)
export class UserService {
    path = 'HAUsers';
    constructor(api, auth) {
        this.api = api;
        this.auth = auth;
    }

    async login(credentials) {
        return await this.api.doLogin(this.path, credentials);
    }

    async getAllWithSignupOrder() {
        return await this.api.doGet(this.path + '?filter={"order": "id DESC"}')
    }

    async getAllWithPhoneOrder() {
        return await this.api.doGet(this.path + '?filter={"order": "id DESC"}')
    }
}