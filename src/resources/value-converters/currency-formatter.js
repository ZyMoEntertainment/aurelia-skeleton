import * as numeral from 'numeral';

export class CurrencyFormatValueConverter {
    toView(value, showDollarSign) {
        if (!value) {
            return;
        }

        //Here we check to see if anyhting was
        if (!showDollarSign) {
            return numeral(value).format('($0,0.00)');
        } else {
            return numeral(value).format('(0,0.00)');
        }
    }
}