import {inject} from 'aurelia-framework';
import {ApiService} from './api-service';

const TOKEN_KEY = 'jwt_token';

@inject(ApiService)
export class SessionService {
    isAuthenticated = false;
    currentUser = null;

    constructor(apiService) {
        this.apiService = apiService;
    }

    async register(data) {
        return await this._apiRequest('HAUsers/logout', data);
    }

    async login(data) {
        return await this._apiRequest('HAUsers/login', data);
    }

    async logout() {
        this.destroyToken();
        this.currentUser = null;
        this.isAuthenticated = false;
    }

    async getUser() {
        if (!this.getToken()) {
            this.currentUser = null;
            this.isAuthenticated = false;
            return;
        }
        return this.currentUser
    }

    async _apiRequest(path, user) {
        let response = await this.apiService.doPost(path, user);
        this.saveToken(response.token);
        this.currentUser = response;
        this.isAuthenticated = true;
    }

    saveToken(token) {
        window.localStorage[TOKEN_KEY] = token;
    }

    getToken() {
        return window.localStorage[TOKEN_KEY];
    }

    destroyToken() {
        window.localStorage.removeItem(TOKEN_KEY);
    }

    isTokenValid() {
        const token = this.getToken();
        return token && token !== '' && token !== undefined && token !== 'undefined';
    }

    getAuthorizationHeader() {
        if (this.isTokenValid()) {
            return `Bearer ${this.getToken()}`;
        }
    };
}