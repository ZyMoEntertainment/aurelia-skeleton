import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@inject(DialogController)

export class ConfirmDialog {

    //Send this dialog these options in an object form and the settings will update accordingly.
    //There is an example on the homepage on how that would work.
    dialogSettings = {
        heading: 'Edit this by sending in a heading attribute to the element declaring this component',
        subtitle: 'Edit this by sending in a subtitle attribute to the element declaring this component',
        body: 'Edit this by sending in a body attribute to the element declaring this component',
        buttonText: 'Confirm'
    };

    constructor(controller) {
        this.controller = controller;

        controller.settings.centerHorizontalOnly = true;
    }

    activate(dialogSettings) {
        this.dialogSettings = dialogSettings;
    }

    cancel() {
        this.controller.cancel('Cancel Clicked');
    }

    confirm() {
        this.controller.ok('Confirm Clicked');
    }

}