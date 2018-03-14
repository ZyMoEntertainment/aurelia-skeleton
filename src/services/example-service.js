import {inject} from 'aurelia-framework';
import {ApiService} from './api-service';


//This file is simply to show you how you would talk to an API using the prebuilt api-service included in this skeleton
@inject(ApiService)
export class ExampleService {
    examplePath = 'ExamplePath'; //This will be your API route, with this endpoint.


    constructor(api) {
        this.api = api;
    }

    exampleGet() {
        return this.api.doGet(this.examplePath)
    }

    exampleGetWithId(id) {
        let differentPath = this.examplePath + '/' + id;
        return this.api.doGet(differentPath)
    }

    examplePost(data) {
        return this.api.doPost(this.examplePath, data)
    }

}