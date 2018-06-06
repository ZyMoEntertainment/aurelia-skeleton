import environment from './environment';
import {HttpClient} from 'aurelia-fetch-client';
import {ApiInterceptor} from 'services/api-interceptor';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('resources')
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
        });

    aurelia.container.get(HttpClient).configure(config => {
        config
            .withBaseUrl(environment.apiUrl)
            .withInterceptor(aurelia.container.get(ApiInterceptor))
            .withDefaults({
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
    });

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    if (environment.testing) {
        aurelia.use
            .plugin('aurelia-testing')
    }

    aurelia.start().then(() => aurelia.setRoot());
}
