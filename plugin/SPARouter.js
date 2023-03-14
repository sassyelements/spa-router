class SPARouter {

    /** List of routes */
    #routes = {};

    constructor() {
        window.onpopstate = this.locationHandler.bind(this);
        window.route = this.route;
    }

    setRoutes(routes) {
        Object.assign(this.#routes, routes);
        this.locationHandler();
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();
        console.log(event.target.href);
        window.history.pushState({}, "", event.target.href);
        this.locationHandler();
    }

    async locationHandler() {
        const location = window.location.pathname;
        if (location.length == 0) {
            location = '/';
        }

        const route = this.#routes[location] || this.#routes[404];
        const html = await fetch(route.template)
            .then(response => response.text());

        document.querySelector('.main').innerHTML = html;
        document.title = route.title;
        document.querySelector('meta[name="description"]')
            .setAttribute("content", route.description);
    }

}

export default new SPARouter();
