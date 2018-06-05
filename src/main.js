import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use
      .plugin('aurelia-testing')
      .plugin('aurelia-dialog')
      .plugin('aurelia-notification', config => {
        config.configure({
          translate: false,  // 'true' needs aurelia-i18n to be configured
            notifications: {
                'success': 'humane-jackedup-success',
                'error': 'humane-jackedup-error',
                'info': 'humane-jackedup-info'
            }
        });
      })
  }

  aurelia.start().then(() => aurelia.setRoot());
}
