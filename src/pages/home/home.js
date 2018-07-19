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
        //The attached function is going to fire BEFORE the page is loaded
    }

    async activate() {
        //The activate function is going to fire AFTER the page is loaded
        //Typically this is where you would want to do any routes to bring in the data for a page.
        //If this data is going to take awhile to load, I would do it in the attached.
        //Aurelia supports ES6/7 Methods so using async/await is going to be your best friend
    }

    rangeSliderValue = 50; //We use this variable to store our selected value from the input slider

    buttons = [
        {type: 'error', message: "Open Error Message"},
        {type: 'info', message: "Open Info Message"},
        {type: 'success', message: "Open Success Message"}
    ];

    johnSmith = {first_name: "John", last_name: "Smith"};

    rgb = { r: 146, g: 39, b: 143 };

    dialogSettings = {heading: 'Example Heading', subtitle: 'Example Subtitle' , body: 'Example Body', buttonText: 'My Confirm Text'};

    openDialog() {
        if (!this.modalOpen) {
            this.modalOpen = true;
            this.dialogService.open({viewModel: ConfirmDialog, model: this.dialogSettings, lock:false})
                .whenClosed(response => {
                    this.modalOpen = false;
                    this.dialogResponse = response.output;
                    console.log(response);
                })
        }
    }

    openNotification(button) {
        this.notification[button.type](button.message)
        //FOR YOU JAVASCRIPT NUBS:
        // IF button = {type: 'success', message: "Open Success Message"}
        // this.notification[button.type](button.message) translates to this.notification.success("Open Success Message")
    }

}
