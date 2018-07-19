import 'bootstrap';
import environment from 'environment';
import {HttpClient} from 'aurelia-fetch-client';
import {ApiInterceptor} from 'services/api-interceptor';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin('aurelia-dialog')
        .plugin('aurelia-validation')
        .plugin('aurelia-api', config => {

            // Register hosts
            config.registerEndpoint('api', configure => {
                configure
                    .withInterceptor(aurelia.container.get(ApiInterceptor))
                    .withBaseUrl(environment.apiEndpoint)
                    .withDefaults(
                        {headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                            }});

            });
        })

        .plugin('aurelia-notification', config => {
            config.configure({
                translate: false,
                notifications: {
                    'success': 'humane-jackedup-success',
                    'error': 'humane-jackedup-error',
                    'info': 'humane-jackedup-info'
                }
            });
        })
        .feature('resources');

    aurelia.container.get(HttpClient).configure(config => {
        config
            .withBaseUrl(environment.apiEndpoint)
            .withDefaults({
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
    });

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    aurelia.start().then(() => aurelia.setRoot());
}
