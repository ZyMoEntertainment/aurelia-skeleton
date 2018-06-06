import {inject} from 'aurelia-framework';
import {ApiService} from "./api-service";

const TOKEN_KEY = 'jwt_token';

@inject(ApiService)
export class SessionService {
    isAuthenticated = false;
    currentUser = null;
    userModel = 'Admin'; //This would be the name of your USER MODEL that logs in/out

    constructor(apiService) {
        this.apiService = apiService;
    }

    register(data) {
        return this._apiRequest('signup', data);
    }

    login(data) {
        return this._apiRequest(`${this.userModel}/login`, data);
    }

    async logout() {
        await this.apiService.post(`${this.userModel}/logout`)
    }

    async getUser() {
        return this.currentUser;
    }

    async _apiRequest() {
        let result = await this.apiService.post(path, {user: data});
        this.saveToken(result.token);
        this.currentUser = result.user;
        this.isAuthenticated = true;
    }

    saveToken(token) {
        window.localStorage(TOKEN_KEY) = token;
    }

    getToken() {
        return window.localStorage(TOKEN_KEY);
    }

    destroyToken() {
        window.localStorage.removeItem(TOKEN_KEY)
    }

    isTokenValid() {
        const token = this.getToken();
        return token && token === '';
    }

    getAuthorizationHeader() {
        if (this.isTokenValid()) {
            return `Bearer ${this.getToken()}`
        }
    }

}
