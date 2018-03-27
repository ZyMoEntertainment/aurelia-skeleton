import {inject} from 'aurelia-framework';
import {ApiService} from './api-service';


//This file is simply to show you how you would talk to an API using the prebuilt api-service included in this skeleton
@inject(ApiService)
export class ExampleService {
    examplePath = 'ExamplePath'; //This is the endpoint that will be attached to your API URL inside your config.json file


    constructor(api) {
        this.api = api;
    }

    //This is just an example, with no actual use in this skeleton
    exampleGet() {
        return this.api.doGet(this.examplePath)
    }

    //This is just an example, with no actual use in this skeleton
    exampleGetWithId(id) {
        let differentPath = this.examplePath + '/' + id;
        return this.api.doGet(differentPath)
    }

    //This is just an example, with no actual use in this skeleton
    examplePost(data) {
        return this.api.doPost(this.examplePath, data)
    }

    getBetween42And55() {
        let path = '42..55'; //Remember this is what is after the API URL declared in the config.json at /config/config.json. So the full path aurelia will use is http://numbersapi/42..55
        return this.api.doGet(path)
    }
}