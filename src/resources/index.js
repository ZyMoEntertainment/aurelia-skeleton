const ELEMENTS = './elements';
const VALUE_CONVERTERS = './value-converters';

export function configure(config) {
    config.globalResources([
        // Elements
        `${ELEMENTS}/input-slider/input-slider`,
        `${ELEMENTS}/error-list/error-list.html`,
        `${ELEMENTS}/confirm-dialog/confirm-dialog.html`,
        `${ELEMENTS}/postal-input/postal-input.html`,
        `${ELEMENTS}/state-input/state-input`,
        `${ELEMENTS}/phone-input/phone-input.html`,
        `${ELEMENTS}/sex-input/sex-input`,

        // Value Converters
        `${VALUE_CONVERTERS}/full-name`,
        `${VALUE_CONVERTERS}/currency-formatter`,
        `${VALUE_CONVERTERS}/keys`,
        `${VALUE_CONVERTERS}/proper-case`,
        `${VALUE_CONVERTERS}/date-formatter`,
        `${VALUE_CONVERTERS}/rgb-to-hex`,
    ]);
}
