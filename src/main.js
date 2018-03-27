import '../styles/styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import 'isomorphic-fetch';

import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export async function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .plugin("aurelia-dialog")
        .plugin('aurelia-configuration', config => {
            //Here is where the config checks for what environment it should be using.
            config.setEnvironments({
                local: ['local', 'localhost'],
                development: ['dev', 'development'],
                production: ['yourproductiondomain.com']
            });

        })
        //https://github.com/grofit/aurelia-chart
        .plugin("aurelia-chart")
        //For more information on the aurelia-notification package check it out here : https://github.com/SpoonX/aurelia-notification
        .plugin('aurelia-notification', config => {
            config.configure({
                translate: false,  // 'true' needs aurelia-i18n to be configured

                //These are what styles we want to be using, the documentation has a few selections to choose from
                notifications: {
                    'success': 'humane-jackedup-success',
                    'error': 'humane-jackedup-error',
                    'info': 'humane-jackedup-info'
                }
            });
        })
        .feature('resources');

    //Enable logging if not in production
    if (process.env.NODE_ENV !== 'production') {
        aurelia.use.developmentLogging();
    }

    await aurelia.start();
    aurelia.setRoot('app');
}