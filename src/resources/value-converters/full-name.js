export class FullNameValueConverter {
    toView(value) {
        if (!value) {
            return;
        }

        return `${value.first_name} ${value.last_name}`;
    }
}
