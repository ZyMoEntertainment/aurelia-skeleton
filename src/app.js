import {inject} from 'aurelia-framework';
import {SessionService} from "services/session-service";
import {Router} from 'aurelia-router'

@inject(SessionService, Router)
export class App {
    constructor(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }

    modalOpen = false;

    user;

    async activate() {
        this.user = await this.sessionService.isTokenValid();
    }

    logout() {
        this.sessionService.logout();
        location.reload();
    }

    configureRouter(config, router) {
        config.options.pushState = true;
        const vRoot = 'pages/';
        config.title = 'Zymo Aurelia Skeleton';
        config.addPipelineStep('postcomplete', PostCompleteStep); //Fires this function after completing the init of controller
        config.map([
            {
                route: ['', 'home'],
                name: 'home',
                moduleId: vRoot + 'home/home',
                nav: true,
                title: 'Home'
            },
            {
                route: 'signup',
                name: 'signup',
                moduleId: vRoot + 'auth/signup',
                title: 'Sign Up'
            },
            {
                route: 'login',
                name: 'login',
                moduleId: vRoot + 'auth/auth',
                title: 'Log In'
            },
            {
                route: 'api-example',
                name: 'api-example',
                moduleId: vRoot + 'api-example/api-example',
                title: 'API Example'
            },
        ]);

        config.mapUnknownRoutes(() => {
            return { redirect: '' };
        });

        this.router = router;
    }

    route(route, param) {
        if (param) {
            this.router.navigate(route + '/' + param, {id: param});
            return
        }
        this.router.navigate(route)
    }
}
class PostCompleteStep {
    run(routingContext, next) {
        $(".page-host").scrollTop(0);

        return next();
    }
}