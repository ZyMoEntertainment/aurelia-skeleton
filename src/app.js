export class App {

  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config, router) {
    //config.options.pushState = true; //This is something that should ALWAYS be true on prod.
    const vRoot = 'pages/';
    this.router = router;
    config.title = 'Aurelia Skeleton';
    config.addPipelineStep('postcomplete', PostCompleteStep); //Fires this function after completing the init of controller
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: vRoot + 'home/home', nav: true, title: 'Home' },
      { route: 'api-example', name: 'API', moduleId: vRoot + 'api-example/api-example', nav:true, title: 'API' }
    ]);

    config.mapUnknownRoutes(() => {
      return { redirect: '' };
    });
  }
}

//We use this for instances where we want the person to be scrolled automatically to the top of a page for each route change
class PostCompleteStep {
  run(routingContext, next) {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    return next();
  }
}
