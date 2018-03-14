import {inject} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {ConfirmDialog} from "../../resources/elements/confirm-dialog/confirm-dialog";
import {Notification} from 'aurelia-notification';

@inject(DialogService, Notification)

export class Home {

    constructor(dialogService, notification) {
        this.dialogService = dialogService;
        this.notification = notification;
    }


    attached() {

    }

    rangeSliderValue = 50; //We use this variable to store our selected value from the input slider

    openDialog() {
        //Lets create the data we wanna send to the dialog - This will be sent to the dialog controller for customizations
        let dialogSettings = {heading: 'Example Heading', subtitle: 'Example Subtitle' , body: 'Example Body', buttonText: 'My Confirm Text'};
        if (!this.modalOpen) {
            this.modalOpen = true;
            this.dialogService.open({viewModel: ConfirmDialog, model: dialogSettings, lock:false})
                .whenClosed(response => {
                    this.modalOpen = false;
                    this.dialogResponse = response.output;
                    console.log(response);
                })
        }
    }

    openNotification(type) {
        if (type == 'info') {
            this.notification.info('Some Info Message!')
        } else if (type == 'error') {
            this.notification.error('Some Error!')
        } else {
            this.notification.success('Some Success Message!')
        }
    }

}
