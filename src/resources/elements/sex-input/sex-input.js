import {bindable} from 'aurelia-framework';

export class SexInputCustomElement {

    sexOptions = ['male', 'female'];
    @bindable value;
    @bindable disabled;

    constructor() {

    }

    activate() {

    }
}