import VanillaTester from '../plugins/VanillaTester';
import SPARouter from '../plugins/SPARouter.js';

const tester = new VanillaTester();

const routes = {
    404: {template: './templates/404.html'},
    '/': {template: './templates/home.html'},
    '/about': {template: './templates/about.html'},
    '/contact': {template: './templates/contact.html'}
}

const hashRoutes = {
    404: {template: './templates/404.html'},
    '/': {template: './templates/home.html'},
    '#about': {template: './templates/about.html'},
    '#contact': {template: './templates/contact.html'}
}

tester.test('Should append an item to an object', () => {
    const allRoutes = {};

    function routes(routes) {
        Object.assign(allRoutes, routes);
    }

    routes({
        404: {
            template: './templates/404.html',
            title: '404 Page Not Found',
            description: '404 Page Not Found! The page you are looking for does not exist.'
        }
    });

    tester.assert(Object.keys(allRoutes).includes("404"));
});

tester.test('Check if the given routes are hash based of url', () => {
    function getRoutesKeys(routes) {
        return Object.keys(routes);
    }

    const urlRoutesKeys = getRoutesKeys(routes);
    const hashRoutesKeys = getRoutesKeys(hashRoutes);

    urlRoutesKeys.forEach(key => {
        if (key !== '404' && key !== '/') {
            tester.assert(key.startsWith('/'));
        }
    })

    hashRoutesKeys.forEach(key => {
        if (key !== '404' && key !== '/') {
            tester.assert(key.startsWith('#'));
        }
    })
});
