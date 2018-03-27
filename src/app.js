import {inject, Aurelia} from 'aurelia-framework';
import {FetchConfig} from 'aurelia-auth';
import {HttpClient} from 'aurelia-fetch-client';
import {AureliaConfiguration} from "aurelia-configuration";
import $ from 'jquery';

@inject(Aurelia, FetchConfig, HttpClient)
export class App {
    constructor(aurelia,  fetchConfig, httpClient) {
        this.aurelia = aurelia;

        this.httpClient = httpClient;
        //To learn more about the fetch client : https://github.com/aurelia/fetch-client
        this.fetchConfig = fetchConfig;
        this.fetchConfig.configure();

        //Setup of the HTTP Request Client, getting endpoint details from config.
        //For more info visit https://github.com/Vheissu/aurelia-configuration
        this.httpClient.configure(config => {
            let configInstance = aurelia.container.get(AureliaConfiguration);
            let apiEndpoint = configInstance.get('api.endpoint');

            config.withBaseUrl(apiEndpoint);
        });
    }

    configureRouter(config, router) {
        //config.options.pushState = true; //This is something that should ALWAYS be true on prod.
        const vRoot = 'pages/';
        config.title = 'Aurelia Skeleton';
        config.addPipelineStep('postcomplete', PostCompleteStep); //Fires this function after completing the init of controller
        config.map([
            { route: ['', 'home'], name: 'home',      moduleId: vRoot + 'home/home',      nav: true, title: 'Home' },
            { route: 'api-example', name: 'API', moduleId: vRoot + 'api-example/api-example', nav:true, title: 'API' }
        ]);

        config.mapUnknownRoutes(() => {
            return { redirect: '' };
        });

        this.router = router;
    }

}

//We use this for instances where we want the person to be scrolled automatically to the top of a page for each route change
class PostCompleteStep {
    run(routingContext, next) {
        $(".page-host").scrollTop(0);

        return next();
    }
}
