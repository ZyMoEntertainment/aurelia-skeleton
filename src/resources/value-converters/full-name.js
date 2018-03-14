export class FullNameValueConverter {
    toView(value) {
        if (!value) {
            return;
        }

        if ((!value.first_name || !value.last_name) && (!value.firstName || !value.lastName)) {
            return;
        }

        if (value.first_name && value.last_name) {
            return `${value.first_name} ${value.last_name}`;
        }

        if (value.firstName && value.lastName) {
            return `${value.firstName} ${value.lastName}`;
        }
    }
}
