export function configure(config) {
  config.globalResources([
    // Elements
    './elements/input-slider/input-slider',
    './elements/confirm-dialog/confirm-dialog',

    // Attributes

    // Value Converters
    './value-converters/full-name',
    './value-converters/currency-formatter',
    './value-converters/rgb-to-hex',
    './value-converters/date-formatter'
  ]);
}
