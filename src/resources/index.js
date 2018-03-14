export function configure(aurelia) {
    //Easy as pie when it comes to adding in resources.
    aurelia.globalResources([
        // Elements
        './elements/input-slider/input-slider',
        './elements/confirm-dialog/confirm-dialog',

        // Attributes

        // Value Converters
        './value-converters/full-name',
        './value-converters/currency-formatter',
        './value-converters/rgb-to-hex'

    ]);
}
