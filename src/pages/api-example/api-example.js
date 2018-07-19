import {inject} from 'aurelia-framework';
import {ExampleService} from "../../services/example-service";
import {Notification} from 'aurelia-notification';
@inject(ExampleService, Notification)

export class Page {
    constructor(service, notification) {
        this.service = service;
        this.notification = notification;
    }

    async activate() {

    }
}
