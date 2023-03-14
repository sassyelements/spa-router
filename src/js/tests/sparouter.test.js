import VanillaTester from '../plugins/VanillaTester';
import SPARouter from '../plugins/SPARouter.js';

const tester = new VanillaTester();

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

