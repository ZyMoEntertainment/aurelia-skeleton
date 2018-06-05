import moment from 'moment';
export class PrettyDateValueConverter {
    toView(value) {
        if (!value) {
            return;
        }
        return moment(value).format("ddd, MMM Do YYYY h:mma");
    }
}