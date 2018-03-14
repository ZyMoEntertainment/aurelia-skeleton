import {bindable, bindingMode, inject} from 'aurelia-framework';

@inject(Element)
export class RangeSlider {


    //This will be the minimum selectable value
    @bindable({defaultBindingMode: bindingMode.oneTime}) min = 0;

    //This will be the maximum selectable value
    @bindable({defaultBindingMode: bindingMode.oneTime}) max = 100;

    //This will be how many values to skip for each input, if step was 5 then : 0,5,10,15 would be selectable
    @bindable({defaultBindingMode: bindingMode.oneTime}) step = 1;

    //This is the variable that is stored to relay back to the view controller
    @bindable({defaultBindingMode: bindingMode.twoWay}) value;

    constructor(element) {
        this.element = element;
    }

    attached() {

    }

}